defmodule Tax do
  def calculate(salary) do
    cond do
      salary > 0 && salary <= 2000 -> "Isento"
      salary > 2000.01 && salary <= 3000 -> (salary - 2000) * 0.08
      salary > 3000.01 && salary <= 4500 -> (salary - 3000) * 0.18 + 1000 * 0.08
      salary >= 4500 -> (salary - 4500) * 0.28 + 1500 * 0.18 + 1000 * 0.08
    end
  end
end

defmodule Util do
  def parse_string_as_float(value) do
    value |> String.trim() |> Float.parse() |> elem(0)
  end

  def parse_mantissa(value, mantissa) do
    :erlang.float_to_binary(value, decimals: mantissa)
  end
end

salary = IO.gets("") |> Util.parse_string_as_float()

taxes = Tax.calculate(salary)

if Kernel.is_number(taxes) do
  IO.puts("R$ #{Util.parse_mantissa(taxes, 2)}")
else
  IO.puts("#{taxes}")
end
