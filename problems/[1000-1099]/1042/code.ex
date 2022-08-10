numbers = IO.gets("") |> String.trim() |> String.split(" ") |> Enum.map(fn x -> String.to_integer(x) end)

numbers_sorted = Enum.sort(numbers, :asc)

numbers_sorted |> Enum.each(fn x -> IO.puts("#{x}") end)

IO.puts("")

numbers |> Enum.each(fn x -> IO.puts("#{x}") end)
