require_relative 'users_database.rb'

class Question
  attr_accessor :id, :title, :body, :author_id

  def self.all
    data = QuestionsDBConnection.instance.execute("SELECT * FROM questions")
    data.map { |datum| Question.new(datum) }
  end

  def initialize(options)
    @id = options['id']
    @title = options['title']
    @body = options['body']
    @author_id = options['author_id']
  end

  def self.find_by_id(id)
    question = QuestionsDBConnection.instance.execute(<<-SQL, id)
      SELECT 
        *
      FROM
        questions
      WHERE
        id = ?
      SQL
      raise 'invalid input' if question.length < 1
      Question.new(question.first)
  end

  def self.find_by_author_id(author_id)
       question = QuestionsDBConnection.instance.execute(<<-SQL, author_id)
      SELECT 
        *
      FROM
        questions
      WHERE
        author_id = ?
      SQL
      raise 'invalid input' if question.length < 1
      question.map {|hash| Question.new(hash)}
  end

  def author
       User.find_by_id(self.author_id)
  end

  def replies
    Reply.find_by_question_id(self.id)
  end
  
  def followers
    QuestionsFollow.followers_for_question_id(self.id)
  end
  def self.most_followed(n)
    QuestionsFollow.most_followed_questions(n)
  end

end