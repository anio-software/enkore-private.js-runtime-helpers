import type {EnkoreJSRuntimeProjectAPIContext} from "@anio-software/enkore-private.spec"
import {parseEmbedURL} from "@anio-software/enkore-private.spec"

export function translateEmbedURLToGlobalIdentifier(
	context: EnkoreJSRuntimeProjectAPIContext,
	embedURL: string
): string {
	const {name, version} = context.project.packageJSON
	const {protocol, path} = parseEmbedURL(embedURL)

	return `${name}/v${version}/${protocol}/${path}`
}
