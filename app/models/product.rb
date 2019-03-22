class Product < ApplicationRecord
  belongs_to :department
  has_many :reviews, dependent: :destroy

  def self.get_products_by_newest(department_id=nil)
    return Product.find_by_sql(["
      SELECT * FROM products
      #{department_id && ("WHERE products.department_id = " + department_id.to_s) }
      ORDER BY products.created_at DESC
      ", department_id])
  end

  def self.get_products_by_oldest(department_id=nil)
    return Product.find_by_sql(["
      SELECT * FROM products
      #{department_id && ("WHERE products.department_id = " + department_id.to_s) }
      ORDER BY products.created_at
      ", department_id])
  end

  def self.get_products_by_alphabetical(department_id=nil)
    return Product.find_by_sql(["
      SELECT * FROM products
      #{department_id && ("WHERE products.department_id = " + department_id.to_s) }
      ORDER BY products.name
      ", department_id])
  end

  def self.get_products_by_price_high(department_id=nil)
    return Product.find_by_sql(["
      SELECT * FROM products
      #{department_id && ("WHERE products.department_id = " + department_id.to_s) }
      ORDER BY products.price DESC
      ", department_id])
  end

  def self.get_products_by_price_low(department_id=nil)
    return Product.find_by_sql(["
      SELECT * FROM products
      #{department_id && ("WHERE products.department_id = " + department_id.to_s) }
      ORDER BY products.price
      ", department_id])
  end
end
