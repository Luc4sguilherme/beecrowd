parse_string_as_integer = fn value -> value |> String.trim() |> String.to_integer() end
is_positive = fn value -> value > 0 end
is_even = fn value -> rem(value, 2) === 0 end

[a, b, c, d] = IO.gets("") |> String.split(" ") |> Enum.map(parse_string_as_integer)

if(b > c && a && c + d > a + b && is_positive.(c) && is_positive.(d) && is_even.(a)) do
  IO.puts("Valores aceitos")
else
  IO.puts("Valores nao aceitos")
end
