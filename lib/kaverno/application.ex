defmodule Kaverno.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      KavernoWeb.Telemetry,
      Kaverno.Repo,
      {DNSCluster, query: Application.get_env(:kaverno, :dns_cluster_query) || :ignore},
      {Phoenix.PubSub, name: Kaverno.PubSub},
      # Start the Finch HTTP client for sending emails
      {Finch, name: Kaverno.Finch},
      # Start a worker by calling: Kaverno.Worker.start_link(arg)
      # {Kaverno.Worker, arg},
      # Start to serve requests, typically the last entry
      KavernoWeb.Endpoint
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: Kaverno.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  @impl true
  def config_change(changed, _new, removed) do
    KavernoWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
