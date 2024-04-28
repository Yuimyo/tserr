run2() {
	node --test --test-name-pattern="/src/test_runner/.*.(test|spec).?[jt]s"
}

run() {
	for file in $(find src/test_runner/ -name "*.test.ts"); do
		node --test $file
	done
}

run
echo OK