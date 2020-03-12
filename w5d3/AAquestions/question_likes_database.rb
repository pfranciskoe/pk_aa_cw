require_relative 'users_database.rb'

class QuestionLike
  attr_accessor :id, :question_id, :user_id

  def self.all
    data = QuestionsDBConnection.instance.execute("SELECT * FROM question_likes")
    data.map { |datum| QuestionLike.new(datum) }
  end

  def initialize(options)
    @id = options['id']
    @question_id = options['question_id']
    @user_id = options['user_id']
  end

  def self.find_by_id(id)
    qlike = QuestionsDBConnection.instance.execute(<<-SQL, id)
      SELECT 
        *
      FROM
        question_likes
      WHERE
        id = ?
      SQL
      raise 'invalid input' if qlike.length < 1
      QuestionLike.new(qlike.first)
  end

  def self.likers_for_question_id(question_id)
    likers = QuestionsDBConnection.instance.execute(<<-SQL, question_id)
    SELECT
      *
    FROM
      users
    JOIN
      question_likes
      ON users.id = user_id
    WHERE
       question_id = ?
    SQL
    return nil if likers.length < 1
    likers.map {|hash| User.new(hash)}
  end
  def self.num_likes_for_question_id(q_id)
    likes = QuestionsDBConnection.instance.execute(<<-SQL, q_id)
    SELECT
      COUNT(*)
    FROM
      question_likes
    GROUP BY
      question_id
    HAVING
      question_id = ?
    SQL
    likes[0]["COUNT(*)"]
  end
  def self.liked_questions_for_user_id(user_id)
    liked = QuestionsDBConnection.instance.execute(<<-SQL, user_id)
    SELECT
      *
    FROM
      questions
    JOIN
      question_likes
      ON questions.id = question_likes.question_id
    WHERE
      user_id = ?
    SQL
    return nil if liked.length < 1
    liked.map{|hash| Question.new(hash)}
  end
end