require_relative 'users_database.rb'

class Reply
  attr_accessor :id, :question_id, :parent_reply_id, :author_reply_id, :body

  def self.all
    data = QuestionsDBConnection.instance.execute("SELECT * FROM replies")
    data.map { |datum| Reply.new(datum) }
  end

  def initialize(options)
    @id = options['id']
    @question_id = options['question_id']
    @parent_reply_id = options['parent_reply_id']
    @author_reply_id = options['author_reply_id']
    @body = options['body']
  end

  def self.find_by_id(id)
    reply = QuestionsDBConnection.instance.execute(<<-SQL, id)
      SELECT 
        *
      FROM
        replies
      WHERE
        id = ?
      SQL
      raise 'invalid input' if reply.length < 1
      Reply.new(reply.first)
  end
  
  def self.find_by_author_reply_id(author_reply_id)
    reply = QuestionsDBConnection.instance.execute(<<-SQL, author_reply_id)
      SELECT 
        *
      FROM
        replies
      WHERE
        author_reply_id = ?
      SQL
      raise 'invalid input' if reply.length < 1
      Reply.new(reply.first)
  end
  
  def self.find_by_question_id(question_id)
    reply = QuestionsDBConnection.instance.execute(<<-SQL, question_id)
      SELECT 
        *
      FROM
        replies
      WHERE
        question_id = ?
      SQL
      raise 'invalid input' if reply.length < 1
      reply.map {|hash| Reply.new(hash)}
  end

  def author
       User.find_by_id(self.author_reply_id)
  end


  def question
       Question.find_by_id(self.question_id)
  end

  def parent_reply
    Reply.find_by_id(self.parent_reply_id)
  end

  def child_replies
    my_id = self.id
    reply = QuestionsDBConnection.instance.execute(<<-SQL, my_id)
      SELECT 
        *
      FROM
        replies
      WHERE
        parent_reply_id = ?
      SQL
      raise 'invalid input' if reply.length < 1
      reply.map {|hash| Reply.new(hash)}
  end
end