defmodule PhoneDialing do
  @destinations [
    %{:code => 61, :destination => "Brasilia"},
    %{:code => 71, :destination => "Salvador"},
    %{:code => 11, :destination => "Sao Paulo"},
    %{:code => 21, :destination => "Rio de Janeiro"},
    %{:code => 32, :destination => "Juiz de Fora"},
    %{:code => 19, :destination => "Campinas"},
    %{:code => 27, :destination => "Vitoria"},
    %{:code => 31, :destination => "Belo Horizonte"}
  ]

  def get_destination(code) do
    Enum.find(@destinations, %{:destination => "DDD nao cadastrado"}, fn destination ->
      destination.code == code
    end)
  end
end

code = IO.gets("") |> String.trim() |> String.to_integer()

%{:destination => destination} = PhoneDialing.get_destination(code)

IO.puts("#{destination}")
