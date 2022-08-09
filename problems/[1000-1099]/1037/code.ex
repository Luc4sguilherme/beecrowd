verify_interval = fn value ->
  cond do
    value >= 0 && value <= 25 -> "Intervalo [0,25]"
    value > 25 && value <= 50 -> "Intervalo (25,50]"
    value > 50 && value <= 75 -> "Intervalo (50,75]"
    value > 75 && value <= 100 -> "Intervalo (75,100]"
    true -> "Fora de intervalo"
  end
end

parse_string_as_float = fn value ->
  value |> String.trim() |> Float.parse() |> elem(0)
end

value = IO.gets("") |> parse_string_as_float.()

intervalo = verify_interval.(value)

IO.puts("#{intervalo}")
