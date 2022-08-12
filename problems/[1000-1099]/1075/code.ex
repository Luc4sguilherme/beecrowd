n = IO.gets("") |> String.trim() |> String.to_integer()

Range.new(1, 9999)
|> Enum.to_list()
|> Enum.filter(fn number -> rem(number, n) == 2 end)
|> Enum.each(fn number -> IO.puts("#{number}") end)
