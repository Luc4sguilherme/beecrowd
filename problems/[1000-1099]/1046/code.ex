calculate_duration = fn start_time, end_time ->
  cond do
    start_time > end_time -> 24 - start_time + end_time
    start_time < end_time -> end_time - start_time
    start_time == end_time -> 24
  end
end

[start_time, end_time] =
  IO.gets("")
  |> String.trim()
  |> String.split(" ")
  |> Enum.map(fn x -> String.to_integer(x) end)

duration = calculate_duration.(start_time, end_time)

IO.puts("O JOGO DUROU #{duration} HORA(S)")
