defmodule Salary do
  def increase(salary) do
    cond do
      salary <= 400 ->
        %{:new_salary => salary * 1.15, :money_earned => salary * 0.15, :percentage => 15}

      salary >= 400.01 && salary <= 800 ->
        %{:new_salary => salary * 1.12, :money_earned => salary * 0.12, :percentage => 12}

      salary >= 800.01 && salary <= 1200 ->
        %{:new_salary => salary * 1.1, :money_earned => salary * 0.1, :percentage => 10}

      salary >= 1200.01 && salary <= 2000 ->
        %{:new_salary => salary * 1.07, :money_earned => salary * 0.07, :percentage => 7}

      salary > 2000 ->
        %{:new_salary => salary * 1.04, :money_earned => salary * 0.04, :percentage => 4}
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

increased_salary = Salary.increase(salary)

IO.puts("Novo salario: #{Util.parse_mantissa(increased_salary.new_salary, 2)}")
IO.puts("Reajuste ganho: #{Util.parse_mantissa(increased_salary.money_earned, 2)}")
IO.puts("Em percentual: #{increased_salary.percentage} %")
