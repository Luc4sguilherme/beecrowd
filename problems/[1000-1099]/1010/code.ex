parse_array_as_float = fn value ->
  value |> Enum.map(fn number -> Float.parse(number) |> elem(0) end)
end

calculate_price_of_product = fn item ->
  Enum.at(item, 1) * Enum.at(item, 2)
end

sum = fn list_of_products ->
  list_of_products
  |> Enum.map(calculate_price_of_product)
  |> Enum.reduce(&(&1 + &2))
end

parse_mantisse = fn number, mantisse -> :erlang.float_to_binary(number, decimals: mantisse) end

product1 = IO.gets("") |> String.split(" ")
product2 = IO.gets("") |> String.split(" ")

products = [parse_array_as_float.(product1) | [parse_array_as_float.(product2)]]

value_to_pay = sum.(products) |> parse_mantisse.(2)

IO.puts("VALOR A PAGAR: R$ #{value_to_pay}")
