defmodule KavernoWeb.PageController do
  use KavernoWeb, :controller

  def home(conn, _params) do
    render(conn, :index, layout: false)
  end
end
