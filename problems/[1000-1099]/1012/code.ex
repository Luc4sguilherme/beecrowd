calculate_area_of_right_triangle = fn base, height ->
  0.5 * base * height
end

calculate_area_of_circle = fn radius ->
  pi = 3.14159

  pi * :math.pow(radius, 2)
end

calculate_area_of_trapezium = fn baseA, baseB, height ->
  0.5 * (baseA + baseB) * height
end

calculate_area_of_square = fn side ->
  :math.pow(side, 2)
end

calculate_area_of_rectangle = fn sideA, sideB ->
  sideA * sideB
end

parse_mantisse = fn value, mantisse ->
    :erlang.float_to_binary(value, decimals: mantisse)
  end

parse_string_as_float = fn value ->
  value |> String.trim() |> Float.parse() |> elem(0)
end

[a, b, c] = IO.gets("") |> String.split(" ") |> Enum.map(parse_string_as_float)

area_of_right_triangle = calculate_area_of_right_triangle.(a, c) |> parse_mantisse.(3)
area_of_circle = calculate_area_of_circle.(c) |> parse_mantisse.(3)
area_of_trapezium = calculate_area_of_trapezium.(a, b, c) |> parse_mantisse.(3)
area_of_square = calculate_area_of_square.(b) |> parse_mantisse.(3)
area_of_rectangle = calculate_area_of_rectangle.(a, b) |> parse_mantisse.(3)

IO.puts("TRIANGULO: #{area_of_right_triangle}")
IO.puts("CIRCULO: #{area_of_circle}")
IO.puts("TRAPEZIO: #{area_of_trapezium}")
IO.puts("QUADRADO: #{area_of_square}")
IO.puts("RETANGULO: #{area_of_rectangle}")
