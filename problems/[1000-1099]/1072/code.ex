count_numbers_in_and_out_of_range = fn numbers, range ->
  Enum.reduce(numbers, %{:in_range => 0, :out_range => 0}, fn number, accumulator ->
    cond do
      number in range -> Map.put(accumulator, :in_range, accumulator.in_range + 1)
      number not in range -> Map.put(accumulator, :out_range, accumulator.out_range + 1)
    end
  end)
end

numbers =
  IO.read(:stdio, :all)
  |> String.trim()
  |> String.split("\n")
  |> Enum.drop(1)
  |> Enum.map(fn x -> String.to_integer(x) end)
  |> Enum.sort(:asc)

%{:in_range => in_range, :out_range => out_range} =
  count_numbers_in_and_out_of_range.(numbers, 10..20)

IO.puts("#{in_range} in")
IO.puts("#{out_range} out")
