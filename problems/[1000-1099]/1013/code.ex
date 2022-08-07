defmodule Program do
  def get_biggest_integer(integerA, integerB) do
    (integerA + integerB + Kernel.abs(integerA - integerB)) |> Kernel./(2) |> Kernel.trunc()
  end

  def get_biggest_integer(integers) do
    [integerA, integerB] = integers |> Enum.slice(0, 2)

    biggest_integer = get_biggest_integer(integerA, integerB)

    rest = Enum.slice(integers, 2, Enum.count(integers))

    cond do
      Enum.count(rest) == 0 ->
        biggest_integer

      Enum.count(rest) == 1 ->
        rest |> Enum.at(0) |> get_biggest_integer(biggest_integer)

      true ->
        rest |> get_biggest_integer() |> get_biggest_integer(biggest_integer)
    end
  end

  def parse_string_as_integer(value) do
    value |> String.trim() |> String.to_integer()
  end
end

integers =
  IO.gets("") |> String.split(" ") |> Enum.map(fn x -> Program.parse_string_as_integer(x) end)

biggest_integer = Program.get_biggest_integer(integers)

IO.puts("#{biggest_integer} eh o maior")
