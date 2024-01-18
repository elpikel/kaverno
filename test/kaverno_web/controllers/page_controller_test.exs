defmodule KavernoWeb.PageControllerTest do
  use KavernoWeb.ConnCase

  test "GET /", %{conn: conn} do
    conn = get(conn, ~p"/")
    assert html_response(conn, 200) =~ "<div id=\"root\">"
  end
end
