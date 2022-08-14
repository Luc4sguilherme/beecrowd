defmodule Program do
  def init() do
    input =
      IO.read(:stdio, :line)
      |> String.trim()
      |> String.to_integer()

    is_valid_password(input, 2002)
  end

  def is_valid_password(input, password) do
    if input == password do
      IO.puts("Acesso Permitido")
    else
      IO.puts("Senha Invalida")
      init()
    end
  end
end

Program.init()
