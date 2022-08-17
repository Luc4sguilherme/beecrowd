defmodule Util do
  def parse_string_as_integer(value) do
    value |> String.trim() |> String.to_integer()
  end
end

defmodule Program do
  def init() do
    %{
      :grenais => grenais,
      :draws => draws,
      :inter_wins => inter_wins,
      :gremio_wins => gremio_wins
    } = get_game_scores()

    IO.puts("#{grenais} grenais")
    IO.puts("Inter:#{inter_wins}")
    IO.puts("Gremio:#{gremio_wins}")
    IO.puts("Empates:#{draws}")

    cond do
      inter_wins > gremio_wins ->
        IO.puts("Inter venceu mais")

      inter_wins < gremio_wins ->
        IO.puts("Gremio venceu mais")

      true ->
        IO.puts("Não houve vencedor")
    end
  end

  def get_game_scores() do
    get_game_scores(%{
      :grenais => 0,
      :draws => 0,
      :inter_wins => 0,
      :gremio_wins => 0
    })
  end

  def get_game_scores(game_scores) do
    [inter, gremio] =
      IO.read(:stdio, :line)
      |> String.trim()
      |> String.split(" ")
      |> Enum.map(fn value -> Util.parse_string_as_integer(value) end)

    result =
      cond do
        inter > gremio -> Map.update(game_scores, :inter_wins, 0, fn x -> x + 1 end)
        inter < gremio -> Map.update(game_scores, :gremio_wins, 0, fn x -> x + 1 end)
        true -> Map.update(game_scores, :draws, 0, fn x -> x + 1 end)
      end
      |> Map.update(:grenais, 0, fn x -> x + 1 end)

    IO.puts("Novo grenal (1-sim 2-nao)")

    action =
      IO.read(:stdio, :line)
      |> Util.parse_string_as_integer()

    case action do
      1 -> get_game_scores(result)
      2 -> result
    end
  end
end

Program.init()
