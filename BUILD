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

# Angular, Remember run yarn install then yarn build first
filegroup(
	name="dist",
	srcs = glob(["dist/**/*"])
)

# Not sure if this is a good idea yet...
# Database
# container_image(
#     name = "database",
#     base = "@postgres//image",
#     ports = ["5432:5432"]
# )

# # liquibase
# filegroup(
# 	name="liquibaseChangelog",
#     srcs = glob(["src/resources/db/changelog/*"])
# )

# filegroup(
# 	name="liquibaseProperties",
#     srcs = ["src/resources/db/liquibase.properties"]
# )

# genrule(
#     name = "liquibase",
#     message = "running liquibase",
#     srcs = ["@liquibase_jar", "liquibaseProperties", "liquibaseChangelog"],
#     # executable = 1,
#     cmd = "java -jar $(location @liquibase//:liquibase.jar) -version > $@",
#     # cmd = "java -jar $(location @liquibase//liquibase.jar) --defaultsFile=$(location liquibase.properties) update >$@",
#     # cmd = "ls $(location @liquibase_liquibase-core_3//jar)",
#     outs = []
# )