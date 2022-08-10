defmodule Animal do
  @animals [
    %{:name => "aguia", :characteristics => ["vertebrado", "ave", "carnivoro"]},
    %{:name => "pomba", :characteristics => ["vertebrado", "ave", "onivoro"]},
    %{:name => "homem", :characteristics => ["vertebrado", "mamifero", "onivoro"]},
    %{:name => "vaca", :characteristics => ["vertebrado", "mamifero", "herbivoro"]},
    %{:name => "pulga", :characteristics => ["invertebrado", "inseto", "hematofago"]},
    %{:name => "lagarta", :characteristics => ["invertebrado", "inseto", "herbivoro"]},
    %{:name => "sanguessuga", :characteristics => ["invertebrado", "anelideo", "hematofago"]},
    %{:name => "minhoca", :characteristics => ["invertebrado", "anelideo", "onivoro"]}
  ]

  def get(characteristics) do
    Enum.find(@animals, fn animal -> animal.characteristics == characteristics end)
  end
end

fisrt = IO.gets("") |> String.trim_trailing("\n")
second = IO.gets("") |> String.trim_trailing("\n")
thirty = IO.gets("") |> String.trim_trailing("\n")

animal = Animal.get([fisrt, second, thirty])

IO.puts("#{animal.name}")
