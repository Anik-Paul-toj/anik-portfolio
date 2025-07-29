import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const SocialRow = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  margin: 2rem 0 0 0;
`;

const GlassIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: rgba(60, 70, 90, 0.48);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1.5px solid rgba(255,255,255,0.18);
  box-shadow: 0 2px 12px 0 rgba(31, 38, 135, 0.10);
  transition: background 0.3s, box-shadow 0.3s, border 0.3s, color 0.3s;
  color: #fff;
  font-size: 1.4rem;
  cursor: pointer;
  &:hover {
    background: rgba(0,255,255,0.18);
    border: 1.5px solid #00ffff;
    box-shadow: 0 4px 24px 0 rgba(0,255,255,0.10);
    color: #00ffff;
  }
`;

export default function SocialIcons() {
  return (
    <SocialRow>
      <GlassIcon href="https://github.com/" target="_blank" rel="noopener noreferrer">
        {React.createElement(FaGithub as any)}
      </GlassIcon>
      <GlassIcon href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
        {React.createElement(FaLinkedin as any)}
      </GlassIcon>
      <GlassIcon href="mailto:your@email.com">
        {React.createElement(FaEnvelope as any)}
      </GlassIcon>
    </SocialRow>
  );
} 