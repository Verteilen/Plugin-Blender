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
}, {
    version: "1.0.0",
    title: "Blender",
    description: "pluginDes",
    i18n: [
        {
            key: "en",
            value: {
                pluginDes: "Open-source 3D modeling tool"
            }
        },
        {
            key: "zh_TW",
            value: {
                pluginDes: "開源 3D 建模工具"
            }
        }
    ]
})

process.exit(0)