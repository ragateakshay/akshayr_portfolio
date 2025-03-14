
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import { ArrowLeft } from 'lucide-react';

const HDMITransmitter = () => {
  return (
    <Layout>
      <div className="py-20 max-w-4xl mx-auto px-6 md:px-10">
        <Link to="/" className="inline-flex items-center text-primary mb-8 group">
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>

        <div className="mb-10">
          <span className="chip bg-secondary text-secondary-foreground mb-4 inline-block">Interface Design</span>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">HDMI 1.4b Transmitter</h1>
          <img 
            src="/hdmi-project.jpg" 
            alt="HDMI 1.4b Transmitter" 
            className="w-full rounded-xl shadow-md mb-8 aspect-video object-cover"
          />
        </div>

        <div className="prose max-w-none">
          <h2>Project Overview</h2>
          <p>
            The HDMI 1.4b Transmitter project involved designing and implementing a high-definition multimedia interface 
            transmitter core compliant with the HDMI 1.4b specification. This interface is crucial for transmitting 
            uncompressed video data and compressed/uncompressed audio data from a source device to a compatible display.
          </p>

          <h2>Technical Details</h2>
          <p>
            The HDMI 1.4b transmitter implementation incorporates several key components:
          </p>
          <ul>
            <li>
              <strong>Video Timing Controller:</strong> Manages video frame timing, sync signals, and pixel data 
              transmission according to CEA-861-E standards.
            </li>
            <li>
              <strong>TMDS Encoders:</strong> Implements Transition Minimized Differential Signaling encoding to 
              convert 8-bit video data to 10-bit transmission codes, reducing electromagnetic interference.
            </li>
            <li>
              <strong>Audio Sampler:</strong> Processes and embeds audio data during the video blanking intervals.
            </li>
            <li>
              <strong>InfoFrame Packet Generator:</strong> Creates and inserts auxiliary data packets containing 
              metadata about the audio/video content.
            </li>
            <li>
              <strong>PHY Layer Interface:</strong> Drives the high-speed differential pairs that carry the TMDS data.
            </li>
          </ul>

          <h2>Challenges & Solutions</h2>
          <p>
            One of the primary challenges was ensuring timing compliance across multiple video formats while maintaining 
            signal integrity. This was addressed through:
          </p>
          <ul>
            <li>Comprehensive timing analysis and verification using specialized tools</li>
            <li>Implementation of adaptive clock domain crossing techniques</li>
            <li>Extensive simulation with industry-standard testbenches</li>
            <li>FPGA-based prototyping for real-world validation</li>
          </ul>

          <h2>Results</h2>
          <p>
            The successfully implemented HDMI 1.4b transmitter design achieved full compliance with the specification, 
            supporting video resolutions up to 4K at 30Hz, 3D video formats, and multiple audio formats. The design was 
            optimized for low power consumption and minimal silicon area while maintaining robust performance.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default HDMITransmitter;
