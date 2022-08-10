calculate_duration = fn initial_time, final_time ->
  minutes =
    cond do
      initial_time.minutes > final_time.minutes ->
        60 - (initial_time.minutes - final_time.minutes)

      initial_time.minutes < final_time.minutes ->
        final_time.minutes - initial_time.minutes

      initial_time.minutes == final_time.minutes ->
        0
    end

  hours =
    cond do
      initial_time.hours > final_time.hours ->
        24 - initial_time.hours + final_time.hours

      initial_time.hours < final_time.hours ->
        final_time.hours - initial_time.hours

      initial_time.hours == final_time.hours ->
        24
    end

  hours = if initial_time.minutes > final_time.minutes, do: hours - 1, else: hours
  hours = if hours == 24 && minutes > 0, do: 0, else: hours

  %{:hours => hours, :minutes => minutes}
end

[initial_time, final_time] =
  IO.gets("")
  |> String.trim()
  |> String.split(" ")
  |> Enum.map(fn x -> String.to_integer(x) end)
  |> Enum.chunk_every(2)
  |> Enum.map(fn x ->
    [[:hours, :minutes], x]
    |> Enum.zip()
    |> Map.new()
  end)

duration = calculate_duration.(initial_time, final_time)

IO.puts("O JOGO DUROU #{duration.hours} HORA(S) E #{duration.minutes} MINUTO(S)")
