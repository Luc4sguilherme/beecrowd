is_multiple = fn a, b -> rem(a, b) == 0 end

[a, b] =
  IO.gets("")
  |> String.trim()
  |> String.split(" ")
  |> Enum.map(fn x -> String.to_integer(x) end)
  |> Enum.sort(:desc)

if(is_multiple.(a, b)) do
  IO.puts("Sao Multiplos")
else
  IO.puts("Nao sao Multiplos")
end
