#!/bin/env zsh

echo "will push version up 1 minor or patch level"

case "$1" in 
	minor)
		echo "minor"
		;;
	major)
		echo major
		;;
	patch)
		echo "patch"
		;;
	*)
		echo "Please select major/minor/patch"
		;;
	esac
