require Integer

list_odd_numbers = fn range ->
  range
  |> Enum.to_list()
  |> Enum.filter(fn x -> rem(x, 2) != 0 end)
end

end_of_range = IO.gets("") |> String.trim() |> String.to_integer()

odd_numbers = list_odd_numbers.(1..end_of_range)

Enum.each(odd_numbers, fn number ->
  IO.puts("#{number}")
end)
