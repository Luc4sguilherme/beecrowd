require Integer

print_square_of_number = fn number ->
  square = :math.pow(number, 2) |> trunc()
  IO.puts("#{number}^2 = #{square}")
end

print_square_of_numbers = fn range ->
  range
  |> Enum.to_list()
  |> Enum.filter(fn number -> Integer.is_even(number) end)
  |> Enum.each(fn number -> print_square_of_number.(number) end)
end

end_of_range = IO.gets("") |> String.trim() |> String.to_integer()

print_square_of_numbers.(1..end_of_range)
