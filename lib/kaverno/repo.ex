defmodule Kaverno.Repo do
  use Ecto.Repo,
    otp_app: :kaverno,
    adapter: Ecto.Adapters.Postgres
end
