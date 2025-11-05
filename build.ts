import { PluginBuild } from "verteilen-core";
import { FFmpeg_ProjectTempGroup, FFmpeg_DatabaseTempGroup } from './src/projectTemplate'

/**
 * Build Plugin To Dist
 */
PluginBuild(
// Destinations
"dist",
{
    // Plugins metadata
    plugins: []
}, {
    // Template metadata
    projects: FFmpeg_ProjectTempGroup,
    databases: FFmpeg_DatabaseTempGroup
})