#!/bin/bash

dir=$(dirname "$0")

"$dir/test.sh"

deno coverage --lcov "$dir/../tmp/test/cov" > "$dir/../tmp/test/lcov"
genhtml -o "$dir/../tmp/test/html" "$dir/../tmp/test/lcov"

open "$dir/../tmp/test/html/index.html"
