print_multiplication_table = fn number ->
  for index <- 1..10 do
    result = index * number
    IO.puts("#{index} x #{number} = #{result}")
  end
end

number = IO.gets("") |> String.trim() |> String.to_integer()

print_multiplication_table.(number)
