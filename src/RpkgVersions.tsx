import React from "react"

export interface RpkgVersion {
    id: string
    changelog: React.ReactElement
    date: string
    zhmtools?: boolean
}

export const latest: RpkgVersion = {
    id: "2.18.0",
    date: "23rd January 2022",
    changelog: (
        <React.Fragment>
            <ul>
                <li>
                    <strong>GUI</strong>
                    <ul>
                        <li>
                            Added QN output to right click menu for TEMP hashes.
                        </li>
                        <li>
                            Added GUI implementation for the Map export and
                            import functions/features.
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>CLI</strong>
                    <ul>
                        <li>
                            Added QN (QuickEntity) JSON output via new function
                            -extract_entity_to_qn for one or more TEMP hashes
                            specified by -filter.
                        </li>
                        <li>
                            Added Map Import functionality via new function
                            -import_map which pulls in the data from the
                            map&#39;s Godot v4 project files and generates QN
                            (QuickEntity) JSON files (entity or patch).
                        </li>
                        <li>
                            Map Export functionality -export_map that exports
                            Hitman maps to a folder containing all that
                            map&#39;s PRIM resources as GLB files (non-textured)
                            and produces scene and project files to allow
                            editing with both Godot v4.
                        </li>
                        <li>
                            General cleanup of the console output so that there
                            is less spam.
                        </li>
                    </ul>
                </li>
                <li>
                    <p>
                        <strong>RPKG</strong>
                    </p>
                    <ul>
                        <li>
                            Fixed the WWES extraction function so it works with
                            the new WWES paths.
                        </li>
                        <li>
                            Update enums for H3 v3.100.0 (Thanks{" "}
                            <a href="https://github.com/AnthonyFuller">
                                AnthonyFuller
                            </a>
                            ).
                        </li>
                    </ul>
                </li>
                <li>
                    <p>
                        <strong>Map Editing caveats:</strong>
                    </p>
                    <ul>
                        <li>
                            You must use Godot v4 (Godot v3 will not work) which
                            you can grab from here:{" "}
                            <a href="https://hugo.pro/projects/godot-builds/">
                                https://hugo.pro/projects/godot-builds/
                            </a>
                            .
                        </li>
                        <li>
                            When clicking on an entity Godot will most likely
                            freeze for a short period of time (Depending on how
                            many entities are in the map and also your
                            computer&#39;s specs) and you&#39;ll have to
                            manually select the root entity in the tree view
                            once Godot has recovered. If you do not select the
                            root entity manually you&#39;ll be moving the wrong
                            thing most likely.
                        </li>
                        <li>
                            If you wish to add/delete entities you will need to
                            do that in QuickEntity Editor and then deploy your
                            changes to the game with the framework and then
                            export the map again and then open it in Godot.
                        </li>
                    </ul>
                </li>
            </ul>
        </React.Fragment>
    ),
}

export const VERSION_2_17_4: RpkgVersion = {
    id: "2.17.4",
    date: "5th January 2022",
    changelog: (
        <React.Fragment>
            <ul>
                <li>
                    <strong>GUI</strong>
                    <ul>
                        <li>Less redundant hash list update message.</li>
                        <li>
                            <em>3D Viewer</em>
                            <ul>
                                <li>Removed camera culling.</li>
                            </ul>
                        </li>
                        <li>
                            <em>Image Viewer</em>
                            <ul>
                                <li>
                                    Image viewer now only loads when you click
                                    it.
                                </li>
                            </ul>
                        </li>
                        <li>
                            <em>Brick Editor</em>
                            <ul>
                                <li>
                                    Fix underscores in entity and property
                                    names.
                                </li>
                                <li>Improve formatting of property names.</li>
                                <li>
                                    Usage of TextBlocks instead of TextBoxes for
                                    uneditable fields.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>CLI</strong>
                    <ul>
                        <li>
                            <em>New commands</em>
                            <ul>
                                <li>
                                    -extract_from_rpkgs (Used to mass extract
                                    files from all RPKGs in a folder, can be
                                    used with filters).
                                </li>
                                <li>
                                    -extract_non_base_hash_depends_from
                                    (Non-base chunk recursive extraction of hash
                                    depends command).
                                </li>
                                <li>
                                    -latest_hash (Finds what RPKG file the
                                    latest/game used hash is in).
                                </li>
                                <li>
                                    -extract_prim_textured_from (Extracts PRIM
                                    models with diffuse and normal textures to
                                    single GLB files).
                                </li>
                                <li>
                                    -dev_hash_list_percent_found (Calculates the
                                    number of hashes in the list that are
                                    &#39;right&#39;).
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>RPKG</strong>
                    <ul>
                        <li>
                            Fix WWES/WWEM paths from getting cut off when
                            extracting them if they contain parameters in their
                            paths.
                        </li>
                        <li>
                            Models now get rebuilt correctly (No more spikes!).
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>Experimental</strong>
                    <ul>
                        <li>
                            New map export function (experimental) -export_map
                            that exports Hitman maps to a folder containing all
                            that map&#39;s PRIM resources as GLB files
                            (non-textured) and produces scene and project files
                            to allow editing with both Godot v3 and v4.
                        </li>
                        <li>
                            New map export function (experimental)
                            -export_map_textured that exports Hitman maps to a
                            folder containing all that map&#39;s PRIM resources
                            as GLB files (textured) and produces scene and
                            project files to allow editing with both Godot v3
                            and v4. Some maps with textures fully loaded can
                            cause Godot to crash due to insufficient memory
                            available. This function is better used on smaller
                            maps or custom entities/bricks.
                        </li>
                        <li>
                            New map import function will be coming soon in a
                            future reason, which will be called -import_map and
                            it will process any changes you have made to the map
                            in Godot and compare those changes to the
                            &#39;vanilla&#39; map per the game&#39;s TEMP/TBLU
                            files and produce output TEMP/TBLU/JSON/RPKG files
                            with those changes in them.
                        </li>
                    </ul>
                </li>
            </ul>
            <hr></hr>
            <p>
                <strong>
                    Technical information regarding the model rebuilding fix:
                </strong>
            </p>
            <p>
                IOI are using single bytes for weights which only represent a
                maximum of 256 possible float values. Weight values are now
                shifted to their nearest 8-bit counterpart and as a whole they
                are normalised, etc.
            </p>
            <p>Here is an image showcasing the fix:</p>
            <img
                id="comparison-image"
                src="/prim_comparison.png"
                alt="Comparision between models"
            ></img>
        </React.Fragment>
    ),
}

export const VERSION_2_17_3: RpkgVersion = {
    id: "2.17.3",
    date: "14th November 2021",
    changelog: (
        <React.Fragment>
            <ul>
                <li>
                    <strong>GUI</strong>
                    <ul>
                        <li>
                            Hash Calculator
                            <ul>
                                <li>
                                    Fixed previous hash calculations showing up
                                    when copying new ones to the clipboard
                                </li>
                                <li>Removed unnecessary exit button</li>
                                <li>
                                    Moved to the <code>Utilities</code> menu
                                </li>
                                <li>
                                    Improve resizing behaviour and add minimum
                                    width
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>RPKG</strong>
                    <ul>
                        <li>
                            Package Definition/Thumbs Decryption &amp;
                            Encryption
                            <ul>
                                <li>
                                    Removed the need of meta files for
                                    encrypting
                                </li>
                                <li>
                                    Fixed encryption of files by calculating the
                                    checksum
                                </li>
                                <li>
                                    Added checksum check on decryption of files
                                </li>
                            </ul>
                        </li>
                        <li>
                            ResourceLib
                            <ul>
                                <li>
                                    Update ResourceLib for{" "}
                                    <code>HITMAN 3 3.70.0.0</code>
                                </li>
                                <li>Relicense everything under the LGPL.</li>
                                <li>
                                    Improve ResourceLib performance and accuracy
                                    of JSON generation.
                                </li>
                                <li>
                                    Improve ResourceLib performance and accuracy
                                    of JSON parsing.
                                </li>
                                <li>
                                    Fix an issue where generated resources could
                                    cause the game to exhibit weird behavior.
                                </li>
                                <li>
                                    Introduce support for generating
                                    &quot;compatible&quot; resources to
                                    ResourceLib (find more info on the ZHMTools
                                    release page).
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </React.Fragment>
    ),
}

export const VERSION_2_17_2: RpkgVersion = {
    id: "2.17.2",
    date: "8 October 2021",
    changelog: (
        <React.Fragment>
            <ul>
                <li>
                    <strong>GUI</strong>:
                    <ul>
                        <li>
                            <em>Brick editor</em>:
                            <ul>
                                <li>
                                    Fixed an issue with recursive brick editing
                                    that caused all recursive TEMPs to be placed
                                    into their own root nodes.
                                </li>
                                <li>
                                    Fixed entity id parents so they now display
                                    the correct id now.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>RPKG</strong>:
                    <ul>
                        <li>Add appropriate license for silk icon set.</li>
                    </ul>
                </li>
            </ul>
        </React.Fragment>
    ),
}

export const VERSION_2_17_1: RpkgVersion = {
    id: "2.17.1",
    date: "7 October 2021",
    changelog: (
        <React.Fragment>
            <ul>
                <li>
                    <strong>Hotfix for v2.17.0</strong>:
                </li>
                <ul>
                    <li>
                        <strong>GUI</strong>:
                        <ul>
                            <li>Fixed recursive brick editing.</li>
                        </ul>
                    </li>
                </ul>
            </ul>
        </React.Fragment>
    ),
}

export const VERSION_2_17_0: RpkgVersion = {
    id: "2.17.0",
    date: "7 October 2021",
    changelog: (
        <React.Fragment>
            <ul>
                <li>
                    <strong>GUI</strong>:
                    <ul>
                        <li>
                            Fix color picker for locales with commas as decimal
                            separator.
                        </li>
                        <li>Update the hash list update message.</li>
                        <li>Remove useless warnings.</li>
                        <li>
                            <em>Hash Calculator</em>:
                            <ul>
                                <li>Add save to clipboard feature.</li>
                                <li>Made said feature faster.</li>
                                <li>
                                    Made said feature not return bogus results.
                                </li>
                            </ul>
                        </li>
                        <li>
                            <em>Brick editor</em>:
                            <ul>
                                <li>Add icons.</li>
                                <li>Show node path below node tree.</li>
                                <li>Removed property data type labels.</li>
                                <li>Added format check to zguid.</li>
                                <li>
                                    Moved node tree operation buttons to a
                                    dropdown menu.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>CLI</strong>:
                    <ul>
                        <li>Flush output stream in interactive mode.</li>
                        <li>
                            <strong>Potentially breaking</strong>: Remove JSON
                            scripting system.
                        </li>
                        <li>
                            Remove functionless dev_extract_all_entity_ids
                            command.
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>RPKG</strong>:
                    <ul>
                        <li>Fix RTLV language count offset.</li>
                    </ul>
                </li>
                <li>
                    <strong>Build</strong>:
                    <ul>
                        <li>Don&#39;t include removed header files.</li>
                    </ul>
                </li>
                <li>Fixed DLGE for HITMAN 2016.</li>
                <li>
                    Added support for HITMAN 3&#39;s new locale (LOCR) format
                    (includes Japanese).
                </li>
            </ul>
        </React.Fragment>
    ),
}

export const VERSION_2_16_3: RpkgVersion = {
    id: "2.16.3",
    date: "1 August 2021",
    changelog: (
        <React.Fragment>
            <ul>
                <li>Updated ResourceLib:</li>
                <ul>
                    <li>Changelog:</li>
                    <ul>
                        <li>
                            Update ResourceLib for HITMAN 3{" "}
                            <code>3.50.0.0.</code>
                        </li>
                        <li>
                            Add Hitman 2016 support to CodeGenLib and the
                            CodeGen tool.
                        </li>
                        <li>
                            Add a new ResourceLib variant that supports Hitman
                            2016 (<code>ResourceLib_HM2016</code>).
                        </li>
                        <li>Add Hitman 2016 support to ResourceTool.</li>
                        <li>
                            Improve error output of ResourceLib / ResourceTool
                            when resource generation fails.
                        </li>
                    </ul>
                </ul>
                <li>
                    Note: H2016 brick editing is not currently supported but the
                    ResourceLib DLL is included in the download. This DLL can be
                    safely deleted.
                </li>
                <li>Updated enums to match ResourceLib (for brick editor).</li>
                <li>LOCR/RTLV support for the latest H3 update.</li>
                <ul>
                    <li>
                        Note: DLGE will currently show the incorrect language
                        identifiers but this doesn't affect functionality.
                    </li>
                </ul>
                <li>Made details, hex viewer & JSON viewer read only.</li>
                <li>Fixed a bug where the image viewer can crash the GUI.</li>
                <li>
                    Fixed a bug where certain LOCR would crash the program
                    (Inconsistent IOI).
                </li>
                <li>
                    Added a <code>-licenses</code> command to RPKG CLI.
                </li>
            </ul>
        </React.Fragment>
    ),
}

export const VERSION_2_16_2: RpkgVersion = {
    id: "2.16.2",
    date: "7 July 2021",
    changelog: (
        <React.Fragment>
            <ul>
                <li>Updated ResourceLib:</li>
                <ul>
                    <li>Changelog:</li>
                    <ul>
                        <li>
                            Added a shitload of new properties to ResourceLib
                            (thanks Anthony Fuller).
                        </li>
                    </ul>
                </ul>
                <ul>
                    <li>
                        Updated enums to match ResourceLib (for brick editor).
                    </li>
                </ul>
                <li>Added Hitman 2016 LOCR extraction and rebuilding.</li>
                <li>
                    RPKG CLI now loads the hash list from the folder the
                    executable is in like RPKG GUI.
                </li>
            </ul>
        </React.Fragment>
    ),
}

export const VERSION_2_16_1: RpkgVersion = {
    id: "2.16.1",
    date: "3 July 2021",
    changelog: (
        <React.Fragment>
            <ul>
                <li>Refactored source code (thanks NoFaTe!)</li>
                <ul>
                    <li>Updated ResourceLib.</li>
                    <ul>
                        <li>Changelog:</li>
                    </ul>
                    <ul>
                        <ul>
                            <li>
                                Update ResourceLib for HITMAN 3{" "}
                                <code>3.40.0.0</code>
                            </li>
                            <li>
                                Added a bunch of missing property names to
                                ResourceLib (thanks Anthony Fuller).
                            </li>
                        </ul>
                    </ul>
                    <li>
                        From now on ResourceLib will not be bundled inside
                        rpkg.exe to comply with the GPLv3 license. Instead, the
                        latest release as of compilation is provided in the
                        download, these DLLs need to be in the same directory as
                        rpkg.exe.
                    </li>
                </ul>
            </ul>
        </React.Fragment>
    ),
}

export const VERSION_2_16_0: RpkgVersion = {
    id: "2.16.0",
    date: "29 May 2021",
    changelog: (
        <React.Fragment>
            <ul>
                <li>
                    Added the functionality to convert .meta files to .meta.JSON
                    and vice versa for easy editing of hash dependencies.
                </li>
                <ul>
                    <li>GUI: See new "Utilities" menu.</li>
                    <li>
                        CLI: <code>-hash_meta_to_json</code> and{" "}
                        <code>-json_to_hash_meta</code>.
                    </li>
                </ul>
            </ul>
        </React.Fragment>
    ),
}

export const VERSION_2_15_1: RpkgVersion = {
    id: "2.15.1",
    date: "27 May 2021",
    changelog: (
        <React.Fragment>
            <ul>
                <li>Revamped Discord Rich Presence integration.</li>
                <li>
                    Added Discord invite link for the Glacier² Modding server.
                </li>
                <li>
                    Fixed RPKG crashing when exiting if Discord Rich Presence
                    was disabled.
                </li>
            </ul>
        </React.Fragment>
    ),
}

export const VERSION_2_15_0: RpkgVersion = {
    id: "2.15.0",
    date: "26 May 2021",
    changelog: (
        <React.Fragment>
            <ul>
                <li>Entity/Brick (TEMP/TBLU) Editor:</li>
                <ul>
                    <li>
                        Converted to{" "}
                        <a href="https://github.com/OrfeasZ/ZHMTools">
                            ZHMTools's ResourceLib
                        </a>{" "}
                        for full H2 and H3 support.
                    </li>
                    <li>
                        Added a "Go" button for EntityIndex properties which
                        takes you directly to the entity being referenced.
                    </li>
                    <li>
                        Added treeview entity (node) history so you can easily
                        revisit entities (nodes) you were previously on.
                    </li>
                    <li>
                        Added JSON export feature that will output TEMP/TBLUs to
                        prettified JSONs for any TEMPs that have been modified.
                    </li>
                </ul>
                <li>Added optional Discord Rich Presence (Off by default).</li>
                <li>
                    Fixed an issue that would cause RPKG to crash if the
                    "InputFolder" property in "rpkg.json" was pointing to a
                    deleted directory.
                </li>
            </ul>
        </React.Fragment>
    ),
}

export const VERSION_2_14_0: RpkgVersion = {
    id: "2.14.0",
    date: "21 May 2021",
    changelog: (
        <React.Fragment>
            <ul>
                <li>
                    Updated ResourceTool by adding subEntities counts for
                    generated TEMP and TBLU files to not only mimic IOI's TEMP
                    and TBLU files, but to help RPKG with version checking.
                </li>
                <li>
                    Added a check for TEMP and TBLU mismatched subEntities
                    counts when loading the Entity/Brick (TEMP/TBLU) Editor, and
                    if mismatched a warning is displayed.
                </li>
                <li>
                    Added hash list checking in the Hash Calculator to let you
                    know if a given hash is in the hash list or not.
                </li>
                <li>
                    Fixed an issue where TEMP and TBLU files which have a
                    mismatched subEntities count would cause RPKG to crash.
                </li>
                <li>
                    Fixed an issue where RPKG would halt or crash due to
                    blank/empty H2 RPKG files.
                </li>
            </ul>
        </React.Fragment>
    ),
    zhmtools: true,
}

export const VERSION_2_13_0: RpkgVersion = {
    id: "2.13.0",
    date: "20 May 2021",
    changelog: (
        <React.Fragment>
            <ul>
                <li>
                    Entity/Brick (TEMP/TBLU) Editor:
                    <ul>
                        <li>
                            Added Hitman 2 functionality to the Entity/Brick
                            (TEMP/TBLU) Editor (by adding such functionality to
                            ResourceTool).
                        </li>
                        <li>
                            Added the option to load the Entity/Brick
                            (TEMP/TBLU) Editor in non-recursive mode.
                        </li>
                        <li>
                            Restored and moved the expand and collapse all nodes
                            buttons in the Entity/Brick (TEMP/TBLU) Editor.
                        </li>
                        <li>
                            The Entity/Brick (TEMP/TBLU) Editor now allows
                            editing of the TEMP's:
                            <ul>
                                <li>
                                    <code>subEntities</code>:{" "}
                                    <code>propertyValues</code>
                                </li>
                                <li>
                                    <code>subEntities</code>:{" "}
                                    <code>postInitPropertyValues</code>
                                </li>
                                <li>
                                    <code>subEntities</code>:{" "}
                                    <code>platformSpecificPropertyValues</code>
                                </li>
                                <li>
                                    <code>subType</code>
                                </li>
                                <li>
                                    <code>blueprintIndexInResourceHeader</code>
                                </li>
                                <li>
                                    <code>rootEntityIndex</code>
                                </li>
                                <li>
                                    <code>propertyOverrides</code>
                                </li>
                                <li>
                                    <code>
                                        externalSceneTypeIndicesInResourceHeader
                                    </code>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    Implemented a single progress window/bar when importing all
                    the RPKGs in a folder.
                </li>
                <li>
                    Added multi-line IOI hash calculator function in the GUI.
                </li>
            </ul>
        </React.Fragment>
    ),
    zhmtools: true,
}

export const VERSION_2_12_0: RpkgVersion = {
    id: "2.12.0",
    date: "19 May 2021",
    changelog: (
        <React.Fragment>
            <ul>
                <li>
                    Entity/Brick (TEMP/TBLU) Editor:
                    <ul>
                        <li>
                            ResourceTool implementation for the Brick Editor
                            which allows full rebuilding (Adding/removing
                            entities coming soon).
                        </li>
                        <li>
                            Generating RPKGs/Saving TEMPs will now only use one
                            single output folder per RPKG base chunk name,
                            instead of splitting files into chunk* and
                            chunk*patch* folders.
                        </li>
                        <li>
                            Implemented a proper progress bar when the TEMP/TBLU
                            files are being recursively loaded.
                        </li>
                    </ul>
                </li>
            </ul>
        </React.Fragment>
    ),
    zhmtools: true,
}

export const VERSION_2_11_2: RpkgVersion = {
    id: "2.11.2",
    date: "12 May 2021",
    changelog: (
        <React.Fragment>
            <ul>
                <li>
                    Significantly improved search result speeds and also added
                    20k, 50k and 100k search options.
                </li>
            </ul>
        </React.Fragment>
    ),
}

export const VERSION_2_11_1: RpkgVersion = {
    id: "2.11.1",
    date: "11 May 2021",
    changelog: (
        <React.Fragment>
            <ul>
                <li>
                    Fixed a texture color issue involving the extraction and
                    rebuilding of BC7 (0x5A) type textures.
                </li>
                <li>
                    Fixed an issue where the hash depends button wasn't working
                    properly on hashes found via the search function.
                </li>
            </ul>
        </React.Fragment>
    ),
}

export const VERSION_2_11_0: RpkgVersion = {
    id: "2.11.0",
    date: "10 May 2021",
    changelog: (
        <React.Fragment>
            <ul>
                <li>
                    Transitioned to a higher performance treeview for the main
                    RPKG GUI.
                </li>
                <li>
                    Fixed an issue with the TEMP editor that caused some TEMPs
                    to not load properly.
                </li>
                <li>
                    Fixed an issue with the hash depends editor that caused
                    RPKGs with multiple hashes to become malformed.
                </li>
            </ul>
        </React.Fragment>
    ),
}

export const VERSION_2_10_0: RpkgVersion = {
    id: "2.10.0",
    date: "10 May 2021",
    changelog: (
        <React.Fragment>
            <ul>
                <li>
                    GUI and CLI
                    <ul>
                        <li>
                            Recursive hash dependency extraction
                            <ul>
                                <li>
                                    <code>-extract_all_hash_depends_from</code>{" "}
                                    and{" "}
                                    <code>
                                        -extract_all_hash_depends_prim_models_from
                                    </code>
                                </li>
                            </ul>
                        </li>
                        <li>
                            Direct hashes only dependency extraction
                            <ul>
                                <li>
                                    <code>
                                        -extract_direct_hash_depends_from
                                    </code>{" "}
                                    and{" "}
                                    <code>
                                        -extract_direct_hash_depends_prim_models_from
                                    </code>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    GUI
                    <ul>
                        <li>Hash dependency editor</li>
                        <li>Patch archive deletion list editor</li>
                    </ul>
                </li>
                <li>
                    Changed <code>-extract_direct_hash_depends</code> to{" "}
                    <code>-extract_direct_hash_depends_from</code> for
                    uniformity.
                </li>
            </ul>
        </React.Fragment>
    ),
}

export const VERSION_2_9_0: RpkgVersion = {
    id: "2.9.0",
    date: "29 April 2021",
    changelog: (
        <React.Fragment>
            <ul>
                <li>
                    HITMAN 3 export Models + Textures linked to a TEMP:
                    <ul>
                        <li>
                            GUI:
                            <ul>
                                <li>
                                    Exporting:
                                    <ul>
                                        <li>
                                            Right click a TEMP hash and select
                                            "Extract PRIM Models Linked To
                                            00123456789ABCDE.TEMP to GLB/TGA
                                            file(s)".
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Reimporting:
                                    <ul>
                                        <li>
                                            Rebuild menu: "Rebuild Primitive
                                            Models (PRIM/TEXT/TEXD) From Folder"
                                            (RPKG(s) archive(s) will also
                                            automatically generate).
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            CLI:
                            <ul>
                                <li>
                                    <code>
                                        -extract_all_prim_model_of_temp_from
                                    </code>{" "}
                                    and <code>-rebuild_prim_model_in</code>.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>Added error handling to the GUI when rebuilding PRIMs.</li>
                <li>
                    Added interactive mode to rpkg-cli which can be access using
                    the <code>-i</code> argument.
                </li>
            </ul>
        </React.Fragment>
    ),
}

export const VERSION_2_8_0: RpkgVersion = {
    id: "2.8.0",
    date: "28 April 2021",
    changelog: (
        <React.Fragment>
            <ul>
                <li>
                    HITMAN 3 Model (PRIM) exporting (Bones will also export but
                    changes won't be reimported) and reimporting with/or without
                    textures:
                    <ul>
                        <li>
                            <strong>GUI:</strong>
                            <ul>
                                <li>
                                    Exporting:
                                    <ul>
                                        <li>
                                            Right click a PRIM hash and select
                                            "Extract 00123456789ABCDE.PRIM model
                                            to GLB/TGA file(s)".
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Reimporting
                                    <ul>
                                        <li>
                                            Rebuild menu: &quot;Rebuild
                                            Primitive Models (PRIM/TEXT/TEXD)
                                            From Folder&quot; (RPKG(s)
                                            archive(s) will also automatically
                                            generate).
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <strong>CLI:</strong>
                            <ul>
                                <li>
                                    With textures included:
                                    <ul>
                                        <li>
                                            <code>
                                                -extract_prim_model_from
                                            </code>{" "}
                                            and{" "}
                                            <code>-rebuild_prim_model_in</code>.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Models only:
                                    <ul>
                                        <li>
                                            <code>-extract_prim_from</code> and{" "}
                                            <code>-rebuild_prim_in</code>.
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    Details Tab:
                    <ul>
                        <li>Reverse hash dependencies will appear now.</li>
                    </ul>
                </li>
            </ul>
            <p>
                <br />
            </p>
            <ul>
                <li>
                    <strong>Notes about model modding (Please read)</strong>
                    <ul>
                        <li>
                            Must use Blender and export to the glTF 2.0 GLB
                            format.
                        </li>
                        <li>Do not rename any of the meshes.</li>
                        <li>
                            You can remove the LOD meshes if you wish to rebuild
                            the model without them.
                        </li>
                        <li>
                            New meshes must match the original mesh names and
                            you can not add any extra.
                        </li>
                        <li>
                            Specific export settings needed for models with
                            bones:
                            <ul>
                                <li>
                                    Untick <em>&quot;+Y Up&quot;</em> under the
                                    Transform category and make sure{" "}
                                    <em>
                                        &quot;Include All Bone Influences&quot;
                                    </em>{" "}
                                    is ticked under the Animation category.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </React.Fragment>
    ),
}

export const VERSION_2_7_0: RpkgVersion = {
    id: "2.7.0",
    date: "18 April 2021",
    changelog: (
        <React.Fragment>
            <ul>
                <li>
                    HITMAN 3 Texture exporting and reimporting:
                    <ul>
                        <li>
                            <strong>GUI:</strong>
                            <ul>
                                <li>
                                    Exporting:
                                    <ul>
                                        <li>
                                            Mass export or right click an
                                            individual TEXT hash.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Reimporting
                                    <ul>
                                        <li>
                                            Rebuild menu (RPKG(s) archive(s)
                                            will also automatically generate.)
                                        </li>
                                    </ul>
                                </li>
                                <li>Texture viewer for TEXT hashes.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>CLI:</strong>
                            <ul>
                                <li>
                                    <code>-extract_text_from</code>,{" "}
                                    <code>-extract_all_text_from</code> and{" "}
                                    <code>-rebuild_text_in</code>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    Brick Editor:
                    <ul>
                        <li>
                            Search feature (Bricks will load slower initially
                            now.)
                        </li>
                    </ul>
                </li>
                <li>Fixed bug with rebuilding GFXF files.</li>
            </ul>
        </React.Fragment>
    ),
}

export const VERSION_2_6_0: RpkgVersion = {
    id: "2.6.0",
    date: "8 April 2021",
    changelog: (
        <React.Fragment>
            <ul>
                <li>
                    Brick Editor:
                    <ul>
                        <li>
                            Multiple bricks now load if the main TEMP depends on
                            them.
                        </li>
                        <li>
                            Recursive TEMP dependencies
                            <ul>
                                <li>
                                    Editor keeps track of what TEMPs you have
                                    edited.
                                </li>
                            </ul>
                        </li>
                        <li>
                            H1 &amp; H2 support for entity/brick (TEMP) editing.
                        </li>
                        <li>
                            Fixed ZString bug that caused strings with commas in
                            them to crash RPKG.
                        </li>
                    </ul>
                </li>
                <li>
                    Models (PRIM):
                    <ul>
                        <li>
                            GLB exporting (glTF 2.0)
                            <ul>
                                <li>
                                    Either by right clicking a PRIM hash or
                                    right clicking a TEMP hash that has PRIM
                                    dependencies.
                                </li>
                                <li>
                                    LODs are parsed and will only export the
                                    highest resolution ones.
                                </li>
                                <li>No bone or texture support yet.</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>Added JSON viewer for JSON hashes.</li>
                <li>Improved speed of loading RPKGs.</li>
            </ul>
        </React.Fragment>
    ),
}

export const VERSION_2_5_0: RpkgVersion = {
    id: "2.5.0",
    date: "21 March 2021",
    changelog: (
        <React.Fragment>
            <ul>
                <li>
                    Implemented preliminary model (PRIM) viewer + exporter to
                    OBJ models
                    <ul>
                        <li>
                            <code>-extract_prim_to_obj_from</code> command in
                            the CLI or you can use the GUI.
                        </li>
                    </ul>
                </li>
                <li>
                    HITMAN 3:
                    <ul>
                        <li>Added: enum support for brick files.</li>
                        <li>
                            Added: export all global entity coords to CSV file
                            function.
                        </li>
                    </ul>
                </li>
                <li>Fixed hash depends showing duplicate hashes.</li>
            </ul>
        </React.Fragment>
    ),
}

export const VERSION_2_4_0: RpkgVersion = {
    id: "2.4.0",
    date: "19 March 2021",
    changelog: (
        <React.Fragment>
            <ul>
                <li>
                    HITMAN 3: Implemented entity/brick (TEMP) file editing
                    (accessed by right clicking on TEMP files.)
                </li>
                <li>
                    Added IOI paths to <code>-hash_depends</code> command line
                    argument.
                </li>
                <li>Fixed H1 issue again.</li>
            </ul>
        </React.Fragment>
    ),
}

export const VERSION_2_3_1: RpkgVersion = {
    id: "2.3.1",
    date: "6 March 2021",
    changelog: (
        <React.Fragment>
            <ul>
                <li>Fixed GFXF rebuilding if the size is different.</li>
                <li>Fixed bug with Hitman 2016 RPKGs.</li>
            </ul>
        </React.Fragment>
    ),
}

export const VERSION_2_3_0: RpkgVersion = {
    id: "2.3.0",
    date: "3 March 2021",
    changelog: (
        <React.Fragment>
            <ul>
                <li>Added GFXF (Scaleform GFX) extraction and rebuilding</li>
                <li>Fixed bug with archive generation in the GUI</li>
                <li>
                    New logo/icon thanks to{" "}
                    <a href="https://twitter.com/dribbleondo">Dribbleondo</a>
                </li>
            </ul>
        </React.Fragment>
    ),
}

export const VERSION_2_2_0: RpkgVersion = {
    id: "2.2.0",
    date: "28 February 2021",
    changelog: (
        <React.Fragment>
            <ul>
                <li>Added an audio player for WWEM, WWES and WWEV hashes.</li>
                <li>Added an image viewer for GFXI hashes.</li>
            </ul>
        </React.Fragment>
    ),
}

export const VERSION_2_1_0: RpkgVersion = {
    id: "2.1.0",
    date: "26 February 2021",
    changelog: (
        <React.Fragment>
            <ul>
                <li>
                    Added new search GUI search feature where you can search
                    through either:
                    <ul>
                        <li>The currently imported/loaded RPKGs</li>
                        <li>The hash list</li>
                    </ul>
                </li>
                <li>
                    Fixed an issue where the folder selection dialog appeared
                    after clicking cancel on the right click popup menu.
                </li>
                <li>Added a horizontal scroll bar to the Details section.</li>
                <li>
                    The hash details now displays the known IOI string for each
                    known hash.
                </li>
                <li>
                    Added extra error outputs for the localization rebuilding
                    functions when malformed JSONs are input.
                </li>
                <li>
                    Added patch archive deletion list for deleted hashes in the
                    &ldquo;Details&rdquo; view for patch archives.
                </li>
            </ul>
        </React.Fragment>
    ),
}

export const VERSION_2_0_1: RpkgVersion = {
    id: "2.0.1",
    date: "23 February 2021",
    changelog: (
        <React.Fragment>
            <ul>
                <li>
                    Added roughly 15k new hashes to the hash list thanks to
                    grappigegovert.
                </li>
                <li>
                    Fixed issue with the <code>-hash_probe</code> function where
                    output was duplicated when used with multiple filters.
                </li>
                <li>
                    Added new <code>-extract_direct_hash_depends</code> function
                    that extracts direct depends to files and meta files.
                </li>
                <li>
                    Fixed issue with RPKG Details tab reporting the wrong number
                    of hashes and total hash sizes for RPKGs.
                </li>
                <li>
                    Changed the default starting color theme to Dark/Red instead
                    of Light/Blue.
                </li>
                <li>
                    Added natural sorting for the RPKG archives when importing
                    by folder or mass extraction.
                </li>
            </ul>
        </React.Fragment>
    ),
}

export const VERSION_2_0_0: RpkgVersion = {
    id: "2.0.0",
    date: "22 February 2021",
    changelog: (
        <React.Fragment>
            <ul>
                <li>
                    Completely rewritten, streamlined all the functions, bug
                    fixes, etc&hellip;
                </li>
                <li>
                    Transformed rpkg into a shared solution consisting of a DLL
                    and a CLI component/program + a WPF .NET Framework based GUI
                </li>
                <li>
                    GUI greatly extends the capabilities of rpkg:
                    <ul>
                        <li>Treeview: Resource and hash dependencies</li>
                        <li>
                            Ability to see all details for a given hash,
                            resource type or whole RPKG archive
                        </li>
                        <li>Hex viewer</li>
                        <li>
                            JSON viewer for localisation files containing
                            strings (LOCR, DLGE and RTLV)
                        </li>
                    </ul>
                </li>
                <li>
                    Implemented revorb.exe for WWEM/WWES and WWEV audio file
                    extraction when extracting to OGG.
                </li>
                <li>
                    Implemented a master hash list that contains known hashes
                    for all 3 of the HITMAN trilogy games.
                    <ul>
                        <li>
                            You can also search for known hashes using this
                            site:{" "}
                            <a href="https://hitmandb.notex.app">
                                https://hitmandb.notex.app
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </React.Fragment>
    ),
}

export const VERSION_1_3_0: RpkgVersion = {
    id: "1.3.0",
    date: "4 February 2021",
    changelog: (
        <React.Fragment>
            <ul>
                <li>
                    Added extraction and rebuilding functionality for a variety
                    of resources:
                    <ul>
                        <li>
                            DLGE (Dialog subs) - Includes output specifying the
                            WWES linked to the dialog
                            <ul>
                                <li>
                                    <code>-extract_dlge_to_json_from</code>
                                </li>
                                <li>
                                    <code>-rebuild_dlge_from_json_from</code>
                                </li>
                            </ul>
                        </li>
                        <li>
                            RTLV (Video subs)
                            <ul>
                                <li>
                                    <code>-extract_rtlv_to_json_from</code>
                                </li>
                                <li>
                                    <code>-rebuild_rtlv_from_json_from</code>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    Added extra meta file outputs when using WWES extraction
                    mode.
                </li>
            </ul>
        </React.Fragment>
    ),
}

export const VERSION_1_2_1: RpkgVersion = {
    id: "1.2.1",
    date: "31 January 2021",
    changelog: (
        <React.Fragment>
            <ul>
                <li>Added rpkg.exe command JSON examples.</li>
                <li>
                    Fixed ORES extraction issue when no input filter was
                    present.
                </li>
            </ul>
        </React.Fragment>
    ),
}

export const VERSION_1_2_0: RpkgVersion = {
    id: "1.2.0",
    date: "30 January 2021",
    changelog: (
        <React.Fragment>
            <ul>
                <li>
                    Added filtering to the ORES WWEV and WWES extraction modes.
                </li>
                <li>
                    Implemented a new scripted command interface through the use
                    of JSON files.
                </li>
                <li>
                    Enable the use of drag and drag for both RPKG and JSON files
                    directly upon the exe, thereby allowing full control of
                    rpkg.exe without command line interface use.
                </li>
            </ul>
        </React.Fragment>
    ),
}

export const VERSION_1_1_1: RpkgVersion = {
    id: "1.1.1",
    date: "29 January 2021",
    changelog: (
        <React.Fragment>
            <ul>
                <li>
                    Added hash probe function (<code>-hash_probe</code>) that
                    allows you to probe RPKG files for the existence of the hash
                    file/resource and provides information.
                </li>
                <li>
                    Added an error message to indicate if a resource was not
                    found when using the <code>-filter</code> function.
                </li>
            </ul>
        </React.Fragment>
    ),
}

export const VERSION_1_1_0: RpkgVersion = {
    id: "1.1.0",
    date: "28 January 2021",
    changelog: (
        <React.Fragment>
            <ul>
                <li>
                    Added the ability to compute an IOI hash from an assembly
                    string.
                </li>
                <li>
                    Added extraction and rebuilding functionality for a variety
                    of resources:
                    <ul>
                        <li>
                            WWEV (SFX) - (With partial IOI internal Wwise file
                            paths / names)
                        </li>
                        <li>LOCR (Localisation)</li>
                    </ul>
                </li>
                <li>
                    WWES (Dialog) extraction with full IOI internal Wwise file
                    paths / names.
                </li>
                <li>
                    XTEA encryption/decryption for packagedefintion.txt /
                    thumbs.dat
                </li>
            </ul>
        </React.Fragment>
    ),
}

export const VERSION_1_0_3: RpkgVersion = {
    id: "1.0.3",
    date: "25 January 2021",
    changelog: (
        <React.Fragment>
            <ul>
                <li>
                    Fixed issue preventing perfect 1:1 repacking of previously
                    unpacked RPKG files.
                </li>
            </ul>
        </React.Fragment>
    ),
}

export const VERSION_1_0_2: RpkgVersion = {
    id: "1.0.2",
    date: "25 January 2021",
    changelog: (
        <React.Fragment>
            <ul>
                <li>
                    Added the ability to specify a desired output folder using{" "}
                    <code>-output_path</code>.
                </li>
                <li>
                    Fixed an issue limiting importing RPKGs with under 100 hash
                    files/resources.
                </li>
                <li>Fixed ORES extraction issue.</li>
            </ul>
        </React.Fragment>
    ),
}

export const VERSION_1_0_1: RpkgVersion = {
    id: "1.0.1",
    date: "24 January 2021",
    changelog: (
        <React.Fragment>
            <ul>
                <li>
                    Decreased the RPKG file import time by an order of
                    magnitude.
                </li>
                <li>Fixed issue related to handling multiple input filters.</li>
            </ul>
        </React.Fragment>
    ),
}

export const VERSION_1_0_0: RpkgVersion = {
    id: "1.0.0",
    date: "24 January 2021",
    changelog: (
        <React.Fragment>
            <ul>
                <li>Initial release.</li>
            </ul>
        </React.Fragment>
    ),
}

export const versions: RpkgVersion[] = [
    latest,
    VERSION_2_17_4,
    VERSION_2_17_3,
    VERSION_2_17_2,
    VERSION_2_17_1,
    VERSION_2_17_0,
    VERSION_2_16_3,
    VERSION_2_16_2,
    VERSION_2_16_1,
    VERSION_2_16_0,
    VERSION_2_15_1,
    VERSION_2_15_0,
    VERSION_2_14_0,
    VERSION_2_13_0,
    VERSION_2_12_0,
    VERSION_2_11_2,
    VERSION_2_11_1,
    VERSION_2_11_0,
    VERSION_2_10_0,
    VERSION_2_9_0,
    VERSION_2_8_0,
    VERSION_2_7_0,
    VERSION_2_6_0,
    VERSION_2_5_0,
    VERSION_2_4_0,
    VERSION_2_3_1,
    VERSION_2_3_0,
    VERSION_2_2_0,
    VERSION_2_1_0,
    VERSION_2_0_1,
    VERSION_2_0_0,
    VERSION_1_3_0,
    VERSION_1_2_1,
    VERSION_1_2_0,
    VERSION_1_1_1,
    VERSION_1_1_0,
    VERSION_1_0_3,
    VERSION_1_0_2,
    VERSION_1_0_1,
    VERSION_1_0_0,
]
