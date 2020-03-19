require_relative 'db_connection'
require 'active_support/inflector'
# NB: the attr_accessor we wrote in phase 0 is NOT used in the rest
# of this project. It was only a warm up.

class SQLObject
  def self.columns
    @columns ||= DBConnection.execute2(<<-SQL)
    SELECT
    *
    FROM
      "#{self.table_name}"
    SQL
    .first
    .map{|el| el.to_sym}
  end

  def self.finalize!
    self.columns.each do |col_name,val|
      define_method(col_name) do
       self.attributes[col_name] ||=  instance_variable_get("@#{col_name}")
      end

      define_method("#{col_name}=") do |val|
        # instance_variable_set("@#{col_name}",val)
        self.attributes[col_name] = val
      end

    end
  end

  def self.table_name=(table_name)
    @table_name = table_name
  end

  def self.table_name
    @table_name ||= self.to_s.downcase + 's'
  end

  def self.all
    self.parse_all(DBConnection.execute(<<-SQL)
    SELECT
    *
    FROM
      "#{self.table_name}"
    SQL
    )
  end

  def self.parse_all(results)
    results.map do |result|
      self.new(result)
    end
  end

  def self.find(id)
    output = DBConnection.execute(<<-SQL,id)
    SELECT
      *
    FROM
      "#{self.table_name}"
    WHERE
      id = ?
    SQL
    return nil if output.empty? 
    self.new(output.first)
  end

  def initialize(params = {})
    params.each do |attr_name, value|
        attr_sym = attr_name.to_sym
      if !self.class.columns.include?(attr_sym)
         raise "unknown attribute '#{attr_name}'"
      else
        self.send("#{attr_sym}=",value)
      end
    end
  end

  def attributes
    @attributes ||= {}
  end

  def attribute_values
    self.class.columns.map {|col| send(col)}
  end

  def insert
      cols = self.class.columns.join(',')
      vals = self.attribute_values
      ques = ("?" * vals.length).chars.join(',')
      tb= self.class.table_name
      DBConnection.execute(<<-SQL,vals)
      INSERT INTO
       "#{self.class.table_name}"
      VALUES
        (#{ques})
      SQL
  end

  def update
    # ...
  end

  def save
    # ...
  end
end
