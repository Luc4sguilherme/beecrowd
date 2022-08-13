{number, index} =
  IO.read(:stdio, :all)
  |> String.trim()
  |> String.split("\n")
  |> Enum.map(fn number -> number |> String.trim() |> String.to_integer() end)
  |> Enum.with_index()
  |> Enum.max_by(fn {number, _} -> number end)

IO.puts("#{number}")
IO.puts("#{index + 1}")
