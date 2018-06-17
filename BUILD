load("@io_bazel_rules_go//go:def.bzl", "go_binary")
load("@bazel_gazelle//:def.bzl", "gazelle")

gazelle(
    name = "gazelle",
    prefix = "maat.com/maat/webapp",
)

go_binary(
    name = "maat",
    srcs = glob(["src/main/go/**/*.go"]),
    visibility = ["//visibility:public"],
    data = [":dist"]
)

#     deps = ["@com_github_gorilla_mux//:go_default_library"]


filegroup(
	name="dist",
	srcs = glob(["dist/**/*"])
)
