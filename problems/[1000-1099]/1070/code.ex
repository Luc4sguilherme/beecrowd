require Integer

list_odd_numbers = fn range ->
  range
  |> Enum.to_list()
  |> Enum.filter(fn x -> rem(x, 2) != 0 end)
end

start_of_range = IO.gets("") |> String.trim() |> String.to_integer()
end_of_range = start_of_range + 11

odd_numbers = list_odd_numbers.(start_of_range..end_of_range)

Enum.each(odd_numbers, fn number ->
  IO.puts("#{number}")
end)
