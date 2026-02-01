import React from 'react';
import Giscus from '@giscus/react';
import { useColorMode } from '@docusaurus/theme-common';

export default function Comments() {
  const { colorMode } = useColorMode();

  return (
    <div style={{ marginTop: '50px' }}>
      <Giscus
        id="comments"
        // 1. The Repo config you provided
        repo="mschuldi-lab/schuldiner-sop"
        repoId="R_kgDORGFR0Q"
        
        // 2. The Category config you provided
        category="Announcements"
        categoryId="DIC_kwDORGFR0c4C1uXe"
        
        // 3. Settings
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        
        // 4. Theme: We use 'colorMode' so it changes automatically 
        // when users toggle Dark/Light mode on your site
        theme={colorMode}
        lang="en"
        loading="lazy"
      />
    </div>
  );
}