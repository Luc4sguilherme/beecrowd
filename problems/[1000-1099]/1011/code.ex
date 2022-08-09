calculate_sphere_volume = fn radius ->
  pi = 3.14159

  4 / 3 * pi * :math.pow(radius, 3)
end

parse_mantissa = fn number, mantissa ->
  :erlang.float_to_binary(number, decimals: mantissa)
end

parse_string_as_float = fn value ->
  value |> String.trim() |> Float.parse() |> elem(0)
end

radius = IO.gets("") |> parse_string_as_float.()

sphere_volume = calculate_sphere_volume.(radius) |> parse_mantissa.(3)

IO.puts("VOLUME = #{sphere_volume}")
