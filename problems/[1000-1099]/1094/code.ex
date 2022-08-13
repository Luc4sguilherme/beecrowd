parse_mantissa = fn value, mantissa ->
  :erlang.float_to_binary(value, decimals: mantissa)
end

is_rabbit = fn animal -> String.contains?(animal, "C") end
is_rat = fn animal -> String.contains?(animal, "R") end
is_frog = fn animal -> String.contains?(animal, "S") end

experiments =
  IO.read(:stdio, :all)
  |> String.trim()
  |> String.split("\n")
  |> Enum.drop(1)
  |> Enum.map(fn value ->
    value
    |> String.trim()
    |> String.split(" ")
  end)
  |> Enum.map(fn [amount, animal] -> [String.to_integer(amount), animal] end)

animals =
  Enum.reduce(
    experiments,
    %{:total_of_rabbit => 0, :total_of_rat => 0, :total_of_frog => 0},
    fn [value, animal], accumulator ->
      cond do
        is_rabbit.(animal) ->
          Map.put(accumulator, :total_of_rabbit, accumulator.total_of_rabbit + value)

        is_rat.(animal) ->
          Map.put(accumulator, :total_of_rat, accumulator.total_of_rat + value)

        is_frog.(animal) ->
          Map.put(accumulator, :total_of_frog, accumulator.total_of_frog + value)
      end
    end
  )

total_number_of_animals = animals.total_of_rabbit + animals.total_of_rat + animals.total_of_frog
percentage_of_rabbit = (animals.total_of_rabbit * 100 / total_number_of_animals) |> parse_mantissa.(2)
percentage_of_rat = (animals.total_of_rat * 100 / total_number_of_animals) |> parse_mantissa.(2)
percentage_of_frog = (animals.total_of_frog * 100 / total_number_of_animals) |> parse_mantissa.(2)

IO.puts("Total: #{total_number_of_animals} cobaias")
IO.puts("Total de coelhos: #{animals.total_of_rabbit}")
IO.puts("Total de ratos: #{animals.total_of_rat}")
IO.puts("Total de sapos: #{animals.total_of_frog}")
IO.puts("Percentual de coelhos: #{percentage_of_rabbit} %")
IO.puts("Percentual de ratos: #{percentage_of_rat} %")
IO.puts("Percentual de sapos: #{percentage_of_frog} %")
