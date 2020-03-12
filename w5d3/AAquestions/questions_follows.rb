require_relative 'users_database.rb'

class QuestionsFollow
  attr_accessor :id, :question_id, :user_id

  def self.all
    data = QuestionsDBConnection.instance.execute("SELECT * FROM questions_follows")
    data.map { |datum| QuestionsFollow.new(datum) }
  end

  def initialize(options)
    @id = options['id']
    @question_id = options['question_id']
    @user_id = options['user_id']
  end

  def self.find_by_id(id)
    qfollows = QuestionsDBConnection.instance.execute(<<-SQL, id)
      SELECT 
        *
      FROM
        questions_follows
      WHERE
        id = ?
      SQL
      raise 'invalid input' if qfollows.length < 1
      QuestionsFollow.new(qfollows.first)
  end

  def self.followers_for_question_id(question_id)
    users = QuestionsDBConnection.instance.execute(<<-SQL, question_id)
      SELECT 
        *
      FROM
        questions_follows
        
      JOIN questions 
        ON questions.id = user_id
      JOIN users 
        ON user_id = users.id
      WHERE
        questions.id = ?
      SQL
      raise 'invalid input' if users.length < 1
      users.map {|hash| User.new(hash)}
  end
  def self.followed_questions_for_user_id(user_id)
    questions = QuestionsDBConnection.instance.execute(<<-SQL, user_id)
    SELECT
      *
    FROM
      questions_follows
    JOIN questions 
        ON questions.id = user_id
    WHERE
      user_id = ?
    SQL
    return nil if questions.length < 1
    questions.map {|hash| Question.new(hash)}
  end
  
  def self.most_followed_questions(n)
    questions = QuestionsDBConnection.instance.execute(<<-SQL,n)
    SELECT
      *
    FROM
      questions_follows
    JOIN
      questions
        ON questions_follows.question_id = questions.id
    GROUP BY
      question_id
    ORDER BY
    COUNT(*) DESC
    LIMIT
    ?
    SQL
    return nil if questions.length < 1
    questions.map {|hash| Question.new(hash)}
    # questions
  end
end