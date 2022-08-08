defmodule TimeDuration do
  def format(duration) do
    hours = div(duration, 3600)
    minutes = rem(duration, 3600) |> div(60)
    seconds = rem(duration, 60)

    "#{hours}:#{minutes}:#{seconds}"
  end
end

defmodule Util do
  def parse_string_as_integer(value) do
    value |> String.trim() |> String.to_integer()
  end
end

duration_in_seconds = IO.gets("") |> Util.parse_string_as_integer()
time_formatted = TimeDuration.format(duration_in_seconds)

IO.puts("#{time_formatted}")
