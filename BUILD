load("@io_bazel_rules_go//go:def.bzl", "go_binary")
load("@bazel_gazelle//:def.bzl", "gazelle")
load("@io_bazel_rules_docker//go:image.bzl", "go_image")
load("@io_bazel_rules_docker//container:container.bzl", "container_image")

gazelle(
    name = "gazelle",
    prefix = "maat.com/maat/webapp",
)

go_image(
    name = "maat",
    srcs = glob(["src/main/go/**/*.go"]),
    importpath = "maat.com/maat/webapp",
    goarch = "amd64",
    goos = "linux",
    pure = "on",
    deps = ["@com_github_gorilla_mux//:go_default_library"],
    data = [":dist"]
)

container_image(
    name = "database",
    base = "@postgres//image",
)


filegroup(
	name="dist",
	srcs = glob(["dist/**/*"])
)
