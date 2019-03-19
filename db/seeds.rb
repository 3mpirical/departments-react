

Department.destroy_all()


for i in (1..5)
    Department.create(
        name: Faker::Commerce.department(),
    )
end

Department.all().each() {|department| 
    for i in (1..20)
        product = Product.create(
            name: Faker::Commerce.product_name(),
            price: Faker::Commerce.price(),
            description: Faker::Lorem.paragraph(3),
            picture: Faker::LoremFlickr.image("100x100", ['product']),
            department_id: department.id,
        )

        for i in (1..5)
            Review.create(
                rating: Faker::Number.between(0, 5),
                text: Faker::Lorem.paragraph(1),
                product_id: product.id,
            )
        end
    end
}


puts "_____Database_Seeded_____"