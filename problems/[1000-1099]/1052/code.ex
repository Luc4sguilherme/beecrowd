defmodule Month do
  @months [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]

  def get(number) do
    Enum.at(@months, number - 1)
  end
end

number = IO.gets("") |> String.trim() |> String.to_integer()

month = Month.get(number)

IO.puts("#{month}")
