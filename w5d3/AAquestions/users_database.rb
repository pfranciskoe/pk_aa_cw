require 'sqlite3'
require 'singleton'
require_relative 'questions_database.rb'
require_relative 'replies_database.rb'

class QuestionsDBConnection < SQLite3::Database
  include Singleton

  def initialize
    super('questions.db')
    self.type_translation = true
    self.results_as_hash = true
  end
end

class User
  attr_accessor :id, :fname, :lname

  def self.all
    data = QuestionsDBConnection.instance.execute("SELECT * FROM users")
    data.map { |datum| User.new(datum) }
  end

  def initialize(options)
    @id = options['id']
    @fname = options['fname']
    @lname = options['lname']
  end

  def self.find_by_id(id)
    user = QuestionsDBConnection.instance.execute(<<-SQL,id)
      SELECT
        *
      FROM
        users
      WHERE
        id = ?
      SQL
    return nil unless user.length > 0
    User.new(user.first)
  end
  
  def self.find_by_name(fname , lname)
    user = QuestionsDBConnection.instance.execute(<<-SQL,fname,lname)
      SELECT
        *
      FROM
        users
      WHERE
        fname = ? AND
        lname = ?
      SQL
    return nil unless user.length > 0
    User.new(user.first)
  end

  def authored_questions
   Question.find_by_author_id(self.id) 
  end

  def authored_replies
    Reply.find_by_author_reply_id(self.id)
  end

  def followed_questions
    QuestionsFollow.followed_questions_for_user_id(self.id)
  end

end
