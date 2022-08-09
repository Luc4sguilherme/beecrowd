defmodule Program do
  @items [
    %{:code => 1, :specification => "Cachorro Quente", :price => 4.00},
    %{:code => 2, :specification => "X-Salada", :price => 4.50},
    %{:code => 3, :specification => "X-Bacon", :price => 5.00},
    %{:code => 4, :specification => "Torrada simples", :price => 2.00},
    %{:code => 5, :specification => "Refrigerante", :price => 1.50}
  ]

  def get_item(code) do
    Enum.find(@items, nil, fn item -> item.code == code end)
  end

  def get_total(code, quantity) do
    %{:price => price} = get_item(code)

    price * quantity
  end
end

defmodule Util do
  def parse_string_as_integer(value) do
    value |> String.trim() |> String.to_integer()
  end

  def parse_mantissa(value, mantissa) do
    :erlang.float_to_binary(value, decimals: mantissa)
  end
end

[code, quantity] = IO.gets("") |> String.split(" ") |> Enum.map(fn x -> Util.parse_string_as_integer(x) end)

total = Program.get_total(code, quantity) |> Util.parse_mantissa(2)

IO.puts("Total: R$ #{total}")
