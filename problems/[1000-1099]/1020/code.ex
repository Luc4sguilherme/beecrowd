defmodule Person do
  def get_age(days) do
    year = div(days, 365)
    month = rem(days, 365) |> div(30)
    days = rem(days, 365) |> rem(30)

    "#{year} ano(s)\n#{month} mes(es)\n#{days} dia(s)"
  end
end

defmodule Util do
  def parse_string_as_integer(value) do
    value |> String.trim() |> String.to_integer()
  end
end

age_in_days = IO.gets("") |> Util.parse_string_as_integer()

age = Person.get_age(age_in_days)

IO.puts(age)
