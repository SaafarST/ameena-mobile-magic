import React, { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import ContactCTA from '@/components/common/ContactCTA'
import './SaidzodaLab.scss'

const NewsCard = ({ article, index, inView, onReadMore }) => {
  const [imageLoaded, setImageLoaded] = useState(false)

  const handleShare = async (e) => {
    e.stopPropagation();
    
    const shareData = {
      title: article.title,
      text: article.excerpt,
      url: window.location.href
    };
    
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copy to clipboard
      const textToCopy = `${article.title}\n\n${article.excerpt}\n\n${window.location.href}`;
      navigator.clipboard.writeText(textToCopy).then(() => {
        alert('Article link copied to clipboard!');
      });
    }
  };

  return (
    <article 
      className={`news-card ${inView ? 'fade-in' : ''}`}
      style={{ 
        animationDelay: `${index * 200}ms`, 
        cursor: 'pointer',
        background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.85))',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(34, 197, 94, 0.15)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
      }}
      onClick={(e) => {
        console.log('Card clicked!', article);
        onReadMore(article);
      }}
    >
      <div className="card-glow" style={{ opacity: 0.3 }}></div>
      <div className="card-scan-line"></div>
      
      <div className="news-image">
        <div className="image-container">
          <div className="image-overlay" style={{ opacity: 0.3 }}></div>
          <img 
            src={article.image} 
            alt={article.title}
            onLoad={() => setImageLoaded(true)}
            className={imageLoaded ? 'loaded' : ''}
          />
          <div className="category-badge" style={{ 
            background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
            border: '1px solid rgba(34, 197, 94, 0.3)',
            color: '#22c55e'
          }}>
            <span className="badge-icon">{article.categoryIcon}</span>
            <span className="badge-text">{article.category}</span>
          </div>
          
          {/* Share Button */}
          <button 
            className="share-btn"
            onClick={handleShare}
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              background: 'rgba(255, 255, 255, 0.9)',
              border: '1px solid rgba(34, 197, 94, 0.3)',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontSize: '16px',
              color: '#22c55e'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(34, 197, 94, 0.1)';
              e.target.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.9)';
              e.target.style.transform = 'scale(1)';
            }}
          >
            📤
          </button>
        </div>
      </div>
      
      <div className="news-content">
        <div className="news-meta">
          <span className="publish-date" style={{ color: '#64748b' }}>{article.date}</span>
          <span className="read-time" style={{ color: '#64748b' }}>{article.readTime} min read</span>
        </div>
        
        <h3 className="news-title" style={{ color: '#1e293b' }}>{article.title}</h3>
        <p className="news-excerpt" style={{ color: '#64748b' }}>{article.excerpt}</p>
        
        <div className="news-tags">
          {article.tags.map((tag, tagIndex) => (
            <span key={tagIndex} className="tag" style={{
              color: '#3b82f6',
              background: 'rgba(59, 130, 246, 0.1)',
              border: '1px solid rgba(59, 130, 246, 0.2)'
            }}>#{tag}</span>
          ))}
        </div>
        
        <div className="card-footer">
          <div className="author-info">
            <div className="author-avatar">
              <img src={article.author.avatar} alt={article.author.name} />
            </div>
            <div className="author-details">
              <span className="author-name" style={{ color: '#1e293b' }}>{article.author.name}</span>
              <span className="author-role" style={{ color: '#64748b' }}>{article.author.role}</span>
            </div>
          </div>
          
          <button 
            className="read-more-btn" 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log('Button clicked!', article);
              onReadMore(article);
            }}
            style={{
              background: 'linear-gradient(135deg, #22c55e, #16a34a)',
              padding: '8px 16px',
              fontSize: '12px',
              boxShadow: '0 4px 12px rgba(34, 197, 94, 0.3)'
            }}
          >
            <span>Read Full Article</span>
            <div className="btn-arrow">→</div>
            <div className="btn-glow"></div>
          </button>
        </div>
      </div>
    </article>
  )
}

// ================================================================================================
// ARTICLE CONTENT COMPONENTS
// ================================================================================================

const FourthArticleContent = () => (
    <>
        <p><em>At Saidzoda Engineering, our mission has been to build a truly intelligent, open-source AI for the Tajik language. Today, we are thrilled to announce the completion of our most ambitious training curriculum to date.</em></p>
            
        <h3 style={{ color: '#22c55e', fontSize: '18px' }}>Executive Summary</h3>
        <p>At Saidzoda Engineering, our mission has been to build a truly intelligent, open-source AI for the Tajik language. Today, we are thrilled to announce the completion of our most ambitious training curriculum to date. By subjecting our Qwen3-8B model to an intensive <strong>multi-epoch, two-stage training regimen</strong>, we have cultivated a model that not only understands Tajik but demonstrates sophisticated reasoning, cultural nuance, and creative capabilities far exceeding any existing open-source alternative.</p>
        
        <p>This new model, the culmination of three full training cycles on our foundational corpus and three cycles on our instruction-following dataset, represents a paradigm shift. In comprehensive evaluations, it consistently provides more detailed, accurate, and methodologically sound answers than its predecessors. Most remarkably, despite being trained exclusively on monolingual Tajik data, the model has developed <strong>powerful zero-shot translation abilities</strong>, a significant emergent capability that underscores the success of our deep-training approach. We believe this work sets a new benchmark for low-resource language model development.</p>
        
        <h3>The Methodology: A Curriculum for Deep Learning</h3>
        <p>Our strategy was built on the principle of progressive specialization. We believe that to create a truly "clever" model, it must first be given a deep linguistic and cultural foundation before being taught to reason.</p>
        
        <p>Our final, most successful model underwent the following curriculum:</p>
        <ul>
            <li><strong>Stage 1 - Foundational Adaptation (3 Epochs):</strong> We trained the base model for three full epochs on our curated <strong>1 Billion+ token corpus</strong> of Tajik books, news, and informational texts.</li>
            <li><strong>Stage 2 - Instruction & Reasoning (3 Epochs):</strong> Following the foundational training, the model was fine-tuned for three full epochs on our <strong>1.25 Million+ example</strong> instruction dataset, rich with Chain-of-Thought (&lt;think&gt;...&lt;/think&gt;) examples.</li>
        </ul>
        
        <p>This "3+3" approach was systematically compared against a "1+1" baseline model to measure the direct impact of this extended training.</p>
        
        <h3>The Results: A Qualitative Leap in Intelligence</h3>
        <p>The difference between the baseline and the final model is not merely incremental; it is a qualitative transformation. The 3+3 epoch model consistently displays a level of sophistication and accuracy that the 1+1 model, while competent, does not reach. Below are direct, side-by-side comparisons from our evaluation suite.</p>
        
        <h4 style={{ color: '#1e293b', fontSize: '14px' }}>Case Study 1: Chain-of-Thought & Multi-Step Reasoning</h4>
        <p><strong>Prompt:</strong> <em>"Дар як синф 30 хонанда ҳаст. Аз инҳо, 20 нафар футболбозӣ мекунанд ва 15 нафар баскетбол. 5 нафар ҳеҷ кадомашро бозӣ намекунанд. Чанд нафар ҳам футбол ва ҳам баскетбол бозӣ мекунанд? Раванди ҳалли худро нишон диҳед."</em></p>
        
        <div style={{border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px', margin: '16px 0', backgroundColor: '#f8fafc'}}>
            <p><strong>1+1 Epoch Model Response:</strong></p>
            <div style={{fontFamily: 'monospace', fontSize: '12px', backgroundColor: '#fff', padding: '12px', borderRadius: '4px', border: '1px solid #ddd'}}>
                <p><strong>&lt;think&gt;</strong> Барои ҳалли ин масъалаи комбинаторӣ... Ҳисоби умумӣ: 30 = 20 + 15 - X + 5. Ҳисоб кардани X: X = 20 + 15 + 5 - 30 =&gt; X = 10. <strong>&lt;/think&gt;</strong> Пас, 10 нафар хонанда ҳам футбол ва ҳам баскетбол бозӣ мекунанд.</p>
            </div>
            <p><strong>Analysis:</strong> The 1+1 model correctly identifies the problem type and formula, successfully arriving at the right answer. A solid demonstration of foundational reasoning.</p>
        </div>
        
        <div style={{border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px', margin: '16px 0', backgroundColor: '#f8fafc'}}>
            <p><strong>3+3 Epoch Model Response:</strong></p>
            <div style={{fontFamily: 'monospace', fontSize: '12px', backgroundColor: '#fff', padding: '12px', borderRadius: '4px', border: '1px solid #ddd'}}>
                <p><strong>&lt;think&gt;</strong> Мо бояд аз формулаи венни истифода барем: A ∪ B = A + B - A ∩ B... Шумораи хонандагоне, ки ҳеҷ кадомашро бозӣ намекунанд, 5 нафар аст. Пас, шумораи хонандагоне, ки ҳатман яке аз ин намудҳоро бозӣ мекунанд (A ∪ B), 30 - 5 = 25 нафар аст. Акнун, мо инро ба формула мегузорем: 25 = 20 + 15 - A ∩ B... A ∩ B = 35 - 25 = 10. <strong>&lt;/think&gt;</strong> Пас, 10 нафар ҳам футбол ва ҳам баскетбол бозӣ мекунанд.</p>
            </div>
            <p><strong>Analysis:</strong> The 3+3 model is noticeably more sophisticated. It correctly identifies the formal name of the principle (Venn diagram/inclusion-exclusion), defines its variables, and performs the crucial preliminary step of calculating the students playing at least one sport. Its reasoning is more transparent and methodical.</p>
        </div>
        
        <h4 style={{ color: '#1e293b', fontSize: '14px' }}>Case Study 2: Creative and Poetic Generation</h4>
<p><strong>Prompt:</strong> <em>"Бо истифода аз калимаҳои 'кӯҳсор', 'чашма' ва 'орзу' як рубоӣ (quatrain) нависед."</em></p>

<div style={{border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px', margin: '16px 0', backgroundColor: '#f8fafc'}}>
    <p><strong>1+1 Epoch Model Response:</strong></p>
    <div style={{fontFamily: 'monospace', fontSize: '12px', backgroundColor: '#fff', padding: '12px', borderRadius: '4px', border: '1px solid #ddd'}}>
        <div style={{fontStyle: 'italic', lineHeight: '1.6', color: '#2d3748'}}>
            <p style={{margin: '4px 0'}}>Эй дил, ки дар кӯҳсори орзуҳо ҷой гирифтаӣ,</p>
            <p style={{margin: '4px 0'}}>Чашмаи ишқи ту аз ҳар як сароҷози дунё ҷорӣ аст.</p>
        </div>
    </div>
    <p><strong>Analysis:</strong> A good metaphorical attempt that uses all keywords, but it produces a two-line <em>bayt</em> instead of the requested four-line <em>rubo'i</em>.</p>
</div>

<div style={{border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px', margin: '16px 0', backgroundColor: '#f8fafc'}}>
    <p><strong>3+3 Epoch Model Response:</strong></p>
    <div style={{fontFamily: 'monospace', fontSize: '12px', backgroundColor: '#fff', padding: '12px', borderRadius: '4px', border: '1px solid #ddd'}}>
        <div style={{fontStyle: 'italic', lineHeight: '1.6', color: '#2d3748'}}>
            <p style={{margin: '4px 0'}}>Дар кӯҳсори хомӯш, чашмаи зулол,</p>
            <p style={{margin: '4px 0'}}>Орзуи диламро ба ҳар тараф пошид.</p>
            <p style={{margin: '4px 0'}}>Аз ин ҳама зебоӣ, дилам ҳама вақт,</p>
            <p style={{margin: '4px 0'}}>Меҷӯяд як ҷои ором, ки дар он осуд.</p>
        </div>
    </div>
    <p><strong>Analysis:</strong> The 3+3 model produces a complete, four-line quatrain with a coherent narrative and richer imagery ("silent mountains," "clear spring"). It demonstrates a superior grasp of the specific poetic form.</p>
</div>
        
        <h4 style={{ color: '#1e293b', fontSize: '14px' }}>Case Study 3: Comparative Analysis and Nuance</h4>
        <p><strong>Prompt:</strong> <em>"Фарқи асосии байни ҷашни Навруз ва Соли Нави мелодӣ дар Тоҷикистон чист?"</em></p>
        
        <div style={{border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px', margin: '16px 0', backgroundColor: '#f8fafc'}}>
            <p><strong>1+1 Epoch Model Response:</strong></p>
            <div style={{fontFamily: 'monospace', fontSize: '12px', backgroundColor: '#fff', padding: '12px', borderRadius: '4px', border: '1px solid #ddd'}}>
                <p>Фарқи асосӣ дар он аст, ки Навруз як ҷашни миллӣ ва фарҳангӣ буда, ба табиат... алоқаманд аст, дар ҳоле ки Соли Нави мелодӣ як ҷашни иҷтимоӣ ва иқтисодӣ... аст.</p>
            </div>
            <p><strong>Analysis:</strong> A very good, high-level answer that correctly captures the thematic difference between a natural/cultural holiday and a calendrical one.</p>
        </div>
        
        <div style={{border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px', margin: '16px 0', backgroundColor: '#f8fafc'}}>
            <p><strong>3+3 Epoch Model Response:</strong></p>
            <div style={{fontFamily: 'monospace', fontSize: '12px', backgroundColor: '#fff', padding: '12px', borderRadius: '4px', border: '1px solid #ddd'}}>
                <p>Фарқи асосӣ дар он аст, ки Навруз ҷашни табиат ва сӯҳи табиат аст, ки ба оғози баҳор ва соли нави қадимӣ рост меосад, дар ҳоле ки Соли Нави мелодӣ (1 январ) ҷашни тақвимӣ ва даврами нави соли мелодӣ мебошад.</p>
            </div>
            <p><strong>Analysis:</strong> The 3+3 model's answer is richer in detail. It correctly adds the concepts of "revival" (сӯҳи), "beginning of spring" (оғози баҳор), and explicitly mentions "January 1st," showing deeper contextual understanding.</p>
        </div>
        
        <h4 style={{ color: '#1e293b', fontSize: '14px' }}>Case Study 4: Linguistic Nuance (Idioms)</h4>
        <p><strong>Prompt:</strong> <em>"Маънои ибораи 'аз зери нохун чирк кофтан' чист?"</em> (What does the idiom 'to dig dirt from under a fingernail' mean?)</p>
        
        <div style={{border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px', margin: '16px 0', backgroundColor: '#f8fafc'}}>
            <p><strong>1+1 Epoch Model Response:</strong></p>
            <div style={{fontFamily: 'monospace', fontSize: '12px', backgroundColor: '#fff', padding: '12px', borderRadius: '4px', border: '1px solid #ddd'}}>
                <p>Ин ибораи маҷозӣ ба маънои 'аз байн бурдани як мушкилоти хурд' ё 'ҳал кардани як мушкилии хурд' истифода мешавад.</p>
            </div>
            <p><strong>Analysis:</strong> The 1+1 model mistakes the idiom's meaning, interpreting it literally as solving a minor issue.</p>
        </div>
        
        <div style={{border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px', margin: '16px 0', backgroundColor: '#f8fafc'}}>
            <p><strong>3+3 Epoch Model Response:</strong></p>
            <div style={{fontFamily: 'monospace', fontSize: '12px', backgroundColor: '#fff', padding: '12px', borderRadius: '4px', border: '1px solid #ddd'}}>
                <p>Ин ибораи маҷозӣ ба маънои 'аз ҳар гуна ҷои пинҳонӣ ва норавшан сирру асрорро ошкор кардан' ё 'аз ҳар гуна ҷои ноаён ҳақиқатро пайдо кардан' истифода мешавад.</p>
            </div>
            <p><strong>Analysis:</strong> The 3+3 model correctly grasps the figurative meaning of nitpicking, fault-finding, or investigating something with excessive and unnecessary detail. This shows a significantly improved understanding of non-literal language.</p>
        </div>
        
        <h4 style={{ color: '#1e293b', fontSize: '14px' }}>Case Study 5: Cultural Alignment in Hypothetical Reasoning</h4>
        <p><strong>Prompt:</strong> <em>"Агар шумо имконисти сафар ба вақтро доштан бошед, ба кадом даврави таърихӣ мерафтед ва чаро?"</em></p>
        
        <div style={{border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px', margin: '16px 0', backgroundColor: '#f8fafc'}}>
            <p><strong>1+1 Epoch Model Response:</strong></p>
            <div style={{fontFamily: 'monospace', fontSize: '12px', backgroundColor: '#fff', padding: '12px', borderRadius: '4px', border: '1px solid #ddd'}}>
                <p>"Агар имконист доштам, ба давраи қадим, ба давраи ҳукмронии Империи Рум мерафтам..."</p>
            </div>
            <p><strong>Analysis:</strong> A good, globally aware answer, but culturally generic.</p>
        </div>
        
        <div style={{border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px', margin: '16px 0', backgroundColor: '#f8fafc'}}>
            <p><strong>3+3 Epoch Model Response:</strong></p>
            <div style={{fontFamily: 'monospace', fontSize: '12px', backgroundColor: '#fff', padding: '12px', borderRadius: '4px', border: '1px solid #ddd'}}>
                <p>"Агар имконисти сафар ба вақтро доштам бошам, ман ба давраи қадим, ба замони ҳукмронии шоҳони Сомонӣ... мерафтам."</p>
            </div>
            <p><strong>Analysis:</strong> The 3+3 model provides a deeply culturally aligned answer, correctly identifying the <strong>Samanid dynasty</strong>, the golden age of Tajik-Persian culture. This shows the extended training imbued the model with a strong sense of its target cultural domain.</p>
        </div>
        
        <h3>The Unforeseen Breakthrough: Emergent Zero-Shot Translation</h3>
        <p>Perhaps the most exciting result is the model's emergent ability to translate. <strong>We did not train the model on any Tajik-English translation data.</strong> To illustrate this, we tasked the models with translating a complex paragraph about Sadriddin Ayni.</p>
        
        <p><strong>Source Text (Tajik):</strong><br/>
        <em>"Садриддин Айнӣ... дар ташаккули забони адабии ҳозираи тоҷик ва худшиносии миллӣ нақши бебаҳо бозидааст."</em></p>
        
        <div style={{border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px', margin: '16px 0', backgroundColor: '#f8fafc'}}>
            <p><strong>1+1 Epoch Model Response:</strong></p>
            <p style={{fontStyle: 'italic'}}>"Sadriddin Ayni is not only recognized as a writer, but also as a great social reformer and the founder of modern Tajik literature. His works, such as 'The Death of the Usurer' and 'Memoirs', depict the life of ordinary people during a period of dramatic historical change. His literary contributions have played a significant role in the formation of the modern Tajik literary language and the development of national identity."</p>
        </div>
        
        <div style={{border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px', margin: '16px 0', backgroundColor: '#f8fafc'}}>
            <p><strong>3+3 Epoch Model Response:</strong></p>
            <p style={{fontStyle: 'italic'}}>"Sadriddin Ayni is not only recognized as a writer, but also as a great social reformer and the founder of modern literature in Tajik. His works, such as 'The Death of a Merchant' and 'Memoirs', depict the life of ordinary people during a period of dramatic historical change. His creative output has played a significant role in the formation of the modern literary language of Tajik and in the development of national identity."</p>
            <p><strong>Analysis:</strong> Both models produce remarkably fluent and accurate translations. The 3+3 model's version is arguably the most stylistically nuanced, choosing phrases like "creative output" and "literature in Tajik." This capability, developed without direct training, validates our approach of using a large monolingual corpus to build a deep linguistic model.</p>
        </div>
        
        <h3>Conclusion: A New Chapter for Tajik AI</h3>
        <p>The successful completion of our multi-epoch training curriculum has produced an open-source Tajik model with unprecedented capabilities in reasoning, creativity, and cultural nuance. This work validates our hypothesis that an intensive, two-stage training process is a highly effective strategy for developing sophisticated AI in low-resource languages.</p>
        
        <p>Our next step is to formalize these findings in a paper for submission to arXiv. In parallel, we will begin exploring the application of this methodology to smaller, even more accessible models, furthering our mission to democratize state-of-the-art AI for the Tajik-speaking world and beyond.</p>
        
        <p>The mind of our machine is not just taking shape; it is beginning to reason, create, and even bridge languages. The journey continues.</p>
    </>
);

const ThirdArticleContent = () => (
    <>
        <p><em>In a sophisticated third stage of development, we have successfully taught our 8B Question-Answering model to "think out loud," a crucial step towards creating a truly transparent and explainable Tajik AI.</em></p>
            
        <h3 style={{ color: '#22c55e', fontSize: '18px' }}>Executive Summary</h3>
        <p>At Saidzoda Lab, our journey in AI development has been one of layered specialization. After creating a fluent Tajik speaker and then a direct Question-Answering expert, we have now achieved a new, more profound milestone: teaching our AI how to reason.</p>
        
        <p>We are thrilled to announce the successful fine-tuning of our <strong>Qwen3 8B Tajik Q&A model</strong> on a new, highly specialized dataset designed to elicit step-by-step reasoning. The model now uses a "Thinking Mode" with <code>&lt;think&gt;...&lt;/think&gt;</code> tags to show its work before providing a final answer, a foundational capability for building trustworthy and explainable AI (XAI).</p>
        
        <h4 style={{ color: '#1e293b', fontSize: '14px' }}>Key Achievements:</h4>
        <ul>
            <li><strong>Three-Layer Specialization:</strong> Our model is now on its third layer of training: 1. General Tajik Fluency → 2. Q&A Skill → 3. Reasoning & Thinking Process.</li>
            <li><strong>Mastery of Format:</strong> The model has successfully learned to use the <code>&lt;think&gt;...&lt;/think&gt;</code> format to structure its reasoning, a significant improvement from our initial experiments.</li>
            <li><strong>Combined Reasoning Dataset:</strong> The training was powered by a new, combined dataset of 1,727 high-quality examples designed to teach structured thought across multiple domains.</li>
            <li><strong>High-Quality Tajik Reasoning:</strong> Unlike earlier attempts where the model "thought" in English, its reasoning process is now predominantly in coherent, high-quality Tajik.</li>
        </ul>
        
        <p>This research marks a pivotal moment—our AI is no longer just a black box providing answers, but a system that can begin to explain its own logic.</p>
        
        <h3>The Methodology: From Answering to Reasoning</h3>
        <p>Building on our previous work, we took our highly capable <code>Tohirju/qwen3_tajik_8B_qa</code> model, which already excelled at answering questions, and embarked on a new training phase.</p>
        
        <p>The goal was to move beyond simple Q&A and instill a structured reasoning process. To do this, we used a new dataset containing examples formatted to show a clear thought process:</p>
        
        <div style={{border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px', margin: '16px 0', backgroundColor: '#f8fafc', fontFamily: 'monospace'}}>
            <p><strong>Training Format:</strong></p>
            <pre style={{margin: 0, fontSize: '12px'}}>
{`<|im_start|>user
Савол (Question)
<|im_end|>
<|im_start|>assistant
<think>
Қадам ба қадам мулоҳизаҳои модел... (The model's step-by-step thoughts...)
</think>
Ҷавоби ниҳоӣ. (The final answer.)
<|im_end|>`}
            </pre>
        </div>
        
        <h4 style={{ color: '#1e293b', fontSize: '14px' }}>Technical Implementation:</h4>
        <ul>
            <li><strong>Base Model:</strong> Our specialized <code>Tohirju/qwen3_tajik_8B_qa</code> model</li>
            <li><strong>New Dataset:</strong> A combined dataset of 1,727 thinking-mode examples</li>
            <li><strong>Training Process:</strong> Applied our proven 3-stage training methodology with 5 epochs for deep learning</li>
        </ul>
        
        <h3>The Results: A Clear and Tangible Leap in Reasoning</h3>
        <p>The test results from our Jupyter Notebook are phenomenal. They show the model not only attempting but often succeeding at generating a clear, step-by-step thought process in Tajik before arriving at the correct answer.</p>
        
        <h4>Example 1: Perfect Mathematical Reasoning</h4>
        <p><strong>Question:</strong> Агар як китоб 150 сомонӣ бошад ва ман 3 китоб харидам, чанд пул пардохт кардам? <em>(If one book is 150 somoni and I bought 3 books, how much did I pay?)</em></p>
        
        <div style={{border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px', margin: '16px 0', backgroundColor: '#f8fafc'}}>
            <p><strong>Model's Response:</strong></p>
            <div style={{fontFamily: 'monospace', fontSize: '12px', backgroundColor: '#fff', padding: '12px', borderRadius: '4px', border: '1px solid #ddd'}}>
                <p><strong>&lt;think&gt;</strong><br/>
                Ин як масъалаи оддии зарб аст.<br/>
                Ман бояд нархи як китобро ба миқдори онҳо зарб занам.<br/>
                Маълумот:<br/>
                Нархи як китоб = 150 сомонӣ<br/>
                Миқдори китобҳо = 3<br/>
                Ҳисоб: 150 сомонӣ × 3 = ?<br/>
                Ман метавонам инро ҳамчун ҷамъи се 150-ро изро кунам:<br/>
                150 + 150 + 150.<br/>
                150 + 150 = 300.<br/>
                300 + 150 = 450.<br/>
                Пас, ман 450 сомонӣ пардохт кардам.<br/>
                <strong>&lt;/think&gt;</strong></p>
                
                <p>Барои ёфтани харозоти умумӣ, ман нархи як китобро ба миқдори онҳо зарб мезанам. 150 × 3 = 450 сомонӣ.</p>
            </div>
            
            <p><strong>Analysis:</strong></p>
            <ul>
                <li>✅ <strong>Perfect Format:</strong> The model correctly uses the &lt;think&gt; tags</li>
                <li>✅ <strong>Clear Logic:</strong> It correctly identifies the operation (multiplication), lays out the data, and shows its work</li>
                <li>✅ <strong>Correct Answer:</strong> It provides the right answer (450 somoni) after its reasoning</li>
            </ul>
        </div>
        
        <h4>Example 2: Successful Logical Reasoning</h4>
        <p><strong>Question:</strong> Агар дар як рӯз 24 соат бошад, пас дар 3 рӯз чанд соат мешавад? <em>(If there are 24 hours in a day, how many hours are in 3 days?)</em></p>
        
        <div style={{border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px', margin: '16px 0', backgroundColor: '#f8fafc'}}>
            <p><strong>Model's Response:</strong></p>
            <div style={{fontFamily: 'monospace', fontSize: '12px', backgroundColor: '#fff', padding: '12px', borderRadius: '4px', border: '1px solid #ddd'}}>
                <p><strong>&lt;think&gt;</strong><br/>
                Ин як масъалаи оддии зарб аст. Ман бояд миқдори соатҳои як рӯзро ба миқдори рӯзҳо зарб занам.<br/>
                Маълумоти додашуда:<br/>
                - Соатҳо дар як рӯз: 24 соат<br/>
                - Миқдори рӯзҳо: 3 рӯз<br/>
                Ҳисоб: 24 соат/рӯз × 3 рӯз = 72 соат.<br/>
                Ҷавоб: Дар 3 рӯз 72 соат мешавад.<br/>
                <strong>&lt;/think&gt;</strong></p>
                
                <p>Дар 3 рӯз 72 соат мавҷуд аст. Барои ёфтани ин миқдор, ман дар як рӯз 24 соатро ба миқдори рӯзҳо (3) зарб мезанам: 24 × 3 = 72.</p>
            </div>
            
            <p><strong>Analysis:</strong></p>
            <ul>
                <li>✅ <strong>Flawless Execution:</strong> The model again shows perfect command of the format, logic, and final answer</li>
            </ul>
        </div>
        
        <h4>Example 3: Developing Knowledge (A Fascinating Insight)</h4>
        <p><strong>Question:</strong> Рудакӣ кист ва вай дар адабиёти тоҷик чӣ мақом дорад? <em>(Who is Rudaki and what is his status in Tajik literature?)</em></p>
        
        <div style={{border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px', margin: '16px 0', backgroundColor: '#f8fafc'}}>
            <p><strong>Model's Reasoning Process (Generated part):</strong></p>
            <div style={{fontFamily: 'monospace', fontSize: '12px', backgroundColor: '#fff', padding: '12px', borderRadius: '4px', border: '1px solid #ddd'}}>
                <p><strong>&lt;think&gt;</strong><br/>
                Ин як саволи муҳими таърихӣ ва адабиётӣ аст...<br/>
                1. Рудакӣ кист?<br/>
                Рудакӣ синни бояи фарҳанг ва адабиёти тоҷикон мебошад... дар асри IXX, ба таври асосгузории як фарҳанги шаҳрвандонаи аввалин...<br/>
                2. Вай дар адабиёти тоҷик чӣ мақом дорад?<br/>
                Рудакӣ яке аз мазмӯаҳои асосии адабиёти тоҷик дар асри IXX мебошад...<br/>
                <strong>&lt;/think&gt;</strong></p>
            </div>
            
            <p><strong>Analysis:</strong></p>
            <ul>
                <li>✅ <strong>Format Mastered:</strong> The model successfully structures its response with a plan and numbered points inside the &lt;think&gt; block</li>
                <li>⚠️ <strong>Factual Inaccuracy:</strong> The reasoning contains a clear historical error (Rudaki was a 9th-10th century poet, not 19th)</li>
            </ul>
            
            <p><strong>The R&D Story:</strong> This is an invaluable result. It proves that we have successfully taught the model how to think and structure an argument. The next step in our research will be to expand its knowledge base to improve the accuracy of its thoughts.</p>
        </div>
        
        <h3>Conclusion: Towards a Truly Transparent Tajik AI</h3>
        <p>Our latest work on the Qwen3-8B Thinking Mode model marks the successful transition from creating fluent language models to building transparent, reasoning systems. By layering skills—fluency, then Q&A, and now reasoning—we are pioneering a methodology for developing sophisticated, explainable AI for low-resource languages.</p>
        
        <p>The model has learned to show its work, and our next chapter will be dedicated to making that work as accurate and insightful as possible. This represents a fundamental step toward <strong>Explainable AI (XAI)</strong> in the Tajik language—a breakthrough that will enable more trustworthy and transparent AI systems for Central Asian languages.</p>
    </>
);

const SecondArticleContent = () => (
    <>
        <p><em>Following our initial success, we unveil a more powerful 4-billion-parameter model trained with an innovative 3-stage methodology, resulting in an AI that not only speaks Tajik but thinks in it.</em></p>
            
        <h3 style={{ color: '#22c55e', fontSize: '18px' }}>Executive Summary</h3>
        <p>Building on the foundation of our pioneering work in Tajik AI, we are thrilled to announce our next major milestone: the successful fine-tuning of a powerful <strong>4-billion-parameter Qwen3 model</strong>. This new model, <code>Tohirju/qwen3_tajik_4B</code>, represents a significant leap in capability, achieved through a sophisticated <strong>3-stage fine-tuning process</strong>.</p>
        <p>The most critical outcome of this advanced training is <strong>language discipline</strong>. While our previous models learned to generate quality Tajik, the base models they were built on often "bled" other languages. This new model has effectively overcome this challenge, producing pure, contextually relevant Tajik text with remarkable consistency.</p>
        
        <h4 style={{ color: '#1e293b', fontSize: '14px' }}>Key Achievements:</h4>
        <ul>
            <li><strong>Advanced Model:</strong> Successfully fine-tuned a large 4-billion-parameter model (<code>Qwen3-4B</code>) for the Tajik language.</li>
            <li><strong>Innovative 3-Stage Training:</strong> Developed and executed a sequential training strategy to build foundational knowledge, reasoning, and stylistic nuance.</li>
            <li><strong>Complete Language Mastery:</strong> The model has learned to exclusively generate responses in Tajik, eliminating the language-switching problem seen in base models.</li>
            <li><strong>Superior Coherence:</strong> Produces more complex, coherent, and contextually appropriate sentences, setting a new standard for Tajik AI.</li>
        </ul>
        
        <h3>The Challenge: Beyond Fluency to Discipline</h3>
        <p>In our previous article, we celebrated the creation of the first-ever dedicated AI models for Tajik. While those models achieved 99-100% success in generating Tajik text, we observed that the underlying base models had a persistent flaw: they would often get confused and output a mix of Russian, Ukrainian, Arabic, or English, especially when faced with ambiguous prompts.</p>
        <p>This is a common problem for multilingual models fine-tuned on a lower-resource language. The model's original, vast training on other languages can sometimes overpower its new, specialized knowledge.</p>
        <p>Our goal for this project was not just to make a bigger model, but a <em>smarter</em> and more <em>disciplined</em> one. We needed to teach the AI not just <em>how</em> to speak Tajik, but to <em>prioritize</em> it above all else.</p>
        
        <h3>Our Solution: The 3-Stage Fine-Tuning Methodology</h3>
        <p>Instead of training the model on our entire dataset at once, we structured the learning process into three distinct, sequential stages, inspired by how humans learn. This approach, detailed in our training notebook, allows the model to build knowledge layer by layer.</p>
        <p> Our fine-tuning was powered by a massive 190-million-token Tajik dataset, which was processed by the model as over 41,000 sequential examples that were then strategically split across these phases. Our complete dataset of over 41,000 high-quality examples was strategically split and used across these phases:</p>
        
        <h4 style={{ color: '#1e293b', fontSize: '14px' }}>Stage 1: Foundation (25% of data, High Learning Rate)</h4>
        <p><strong>Goal:</strong> To build a broad linguistic base. The model is exposed to a diverse set of texts, learning the fundamental grammar, vocabulary, and sentence structures of the Tajik language. This is like learning the alphabet, basic vocabulary, and grammar rules.</p>
        
        <h4 style={{ color: '#1e293b', fontSize: '14px' }}>Stage 2: Reasoning (37.5% of data, Medium Learning Rate)</h4>
        <p><strong>Goal:</strong> To connect concepts and develop coherence. With a slightly lower learning rate, the model learns to form more complex sentences, maintain context over longer passages, and understand relationships between ideas. This is like learning to write full paragraphs and short essays.</p>
        
        <h4 style={{ color: '#1e293b', fontSize: '14px' }}>Stage 3: Specialization (37.5% of data, Low Learning Rate)</h4>
        <p><strong>Goal:</strong> To refine style and master nuance. Using the lowest learning rate, we make fine adjustments, teaching the model the specific stylistic patterns of our dataset (classical literature, official news), ensuring high-quality, domain-appropriate outputs. This is like developing a specific writing style, be it literary, academic, or journalistic.</p>
        
        <p>This staged approach, with progressively decreasing learning rates, proved instrumental in cementing Tajik as the model's primary operational language.</p>
        
        <h3>The Results: From a Multilingual Mess to a Tajik Expert</h3>
        <p>The difference between the base <code>Qwen3-4B</code> model and our fine-tuned version is night and day. Where the base model produces a chaotic mix of languages, our model responds with clean, coherent, and relevant Tajik.</p>
        
        <h4>Comparative Examples: Base Model vs. Our Fine-Tuned Model</h4>
        <div style={{border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px', margin: '16px 0', backgroundColor: '#f8fafc'}}>
            <p><strong>Example 1: A Geographic Prompt</strong><br/><strong>Prompt:</strong> <code>Дар пойтахти </code> (In the capital of)</p>
            <hr style={{margin: '12px 0'}}/>
            <p><strong>Base Qwen3-4B Response:</strong><br/><em>`1-й лінії, якщо вона має наступний вигляд: x = -3 + 2t, y = 4 + 5t.`</em><br/><strong>Analysis:</strong> ❌ Total Failure. Responds in <strong>Ukrainian</strong> with a mathematical equation, completely ignoring the prompt's context and language.</p>
            <hr style={{margin: '12px 0'}}/>
            <p><strong>🔥 Our Fine-Tuned 4B Response:</strong><br/><em>`Ҷумҳурии Тоҷикистон, кӯдакони мусофир буданд. Падарам бо додарам ба шаҳраки "Санат" рафтан дорем ва`</em><br/><strong>Analysis:</strong> ✅ Excellent Success. Correctly identifies a relevant context (Republic of Tajikistan) and continues with a coherent, grammatically correct Tajik sentence.</p>
        </div>
        
        <div style={{border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px', margin: '16px 0', backgroundColor: '#f8fafc'}}>
            <p><strong>Example 2: A Political Prompt</strong><br/><strong>Prompt:</strong> <code>Вазири маориф </code> (Minister of Education)</p>
            <hr style={{margin: '12px 0'}}/>
            <p><strong>Base Qwen3-4B Response:</strong><br/><em>`2018 مۇسلۇمەت 1: بە ئەمەلگەچنى تۇزىيەتى دەپەر ئۆزىنىڭ مۇھ`</em><br/><strong>Analysis:</strong> ❌ Total Failure. Responds in a completely different script (<strong>Arabic/Uyghur</strong>), demonstrating its multilingual confusion.</p>
            <hr style={{margin: '12px 0'}}/>
            <p><strong>🔥 Our Fine-Tuned 4B Response:</strong><br/><em>`ҳамаи шахсонро ба китобхонае бурда, бо вуҷуд аз он сар мезаданд. Дар оғози соли гузашта дар наз`</em><br/><strong>Analysis:</strong> ✅ Excellent Success. Provides a logical and fluent continuation in perfect Tajik, creating a contextually plausible scenario.</p>
        </div>
        
        <p>These examples are not cherry-picked; they represent a consistent pattern. The base model is unreliable for any practical application in Tajik. <strong>Our fine-tuned model, however, is a disciplined and reliable tool that can be trusted to stay on-task and in-language.</strong></p>

        <h3>Technical Implementation</h3>
        <p>This achievement was made possible by a robust training infrastructure and a clear methodology.</p>
        <ul>
            <li><strong>Framework:</strong> Unsloth 2025.6.2 with 4-bit quantization and LoRA.</li>
            <li><strong>Hardware:</strong> NVIDIA RTX 4000 Ada Generation (19.7GB VRAM).</li>
            <li><strong>Dataset:</strong> A combined dataset of over 41,000 examples (190 million of tokens) from Tajik news and classical literature.</li>
            <li><strong>Total Training Time:</strong> Approximately 4.5 hours across all three stages.</li>
        </ul>
        
        <h3>Conclusion: A New and Reliable Foundation for Tajik AI</h3>
        <p>The creation of <code>Tohirju/qwen3_tajik_4B</code> is more than just an upgrade; it's a fundamental shift in what's possible for Tajik language technology. By implementing a sophisticated 3-stage training process, we have produced a model that is not only larger and more powerful but, critically, is disciplined in its use of the Tajik language.</p>
        <p>This model serves as a far superior foundation for future development, including the creation of specialized Q&A systems, document summarizers, and other advanced AI tools for the Tajik-speaking world. We are proud to have set a new standard for quality and reliability in low-resource language AI.</p>
    </>
);

const FirstArticleContent = () => (
    <>
        <p><em>Pioneering quality-focused evaluation of Qwen3 models fine-tuned for Tajik language - addressing a critical gap in Central Asian language technology</em></p>
        
        <h3 style={{ color: '#22c55e', fontSize: '18px' }}>Executive Summary</h3>
        <p>We are proud to announce the successful completion of our groundbreaking project: the development and evaluation of the first dedicated AI language models for Tajik processing. Through systematic fine-tuning of Alibaba's Qwen3 models, we have created specialized language models that demonstrate superior performance in generating coherent, culturally appropriate Tajik text.</p>
        
        <h4 style={{ color: '#1e293b', fontSize: '14px' }}>Key Achievements:</h4>
        <ul>
            <li>Successfully fine-tuned Qwen3-0.6B and Qwen3-1.7B models specifically for Tajik language</li>
            <li>Achieved 99-100% success rates across comprehensive evaluation frameworks</li>
            <li>Developed innovative quality assessment methodology beyond traditional automated metrics</li>
            <li>Created the first production-ready AI models for Tajik language processing</li>
        </ul>
        
        <h3>The Challenge: Addressing Tajik Language Underrepresentation</h3>
        
        <h4>Current State of Central Asian Language AI</h4>
        <p>While significant progress has been made in AI language models for major Central Asian languages, Tajik has remained substantially underserved:</p>
        
        <ul>
            <li><strong>Kazakh:</strong> Advanced development with ISSAI KAZ-LLM (8B and 70B parameters)</li>
            <li><strong>Uzbek:</strong> Strong BERT-based models (UzBERT, BERTBek, UzRoberta)</li>
            <li><strong>Kyrgyz:</strong> Limited development, primarily speech recognition</li>
            <li><strong>Turkmen:</strong> Minimal NLP development</li>
            <li><strong>Tajik:</strong> <strong>No dedicated language models until our project</strong></li>
        </ul>
        
        <h4>Critical Gaps We Identified</h4>
        <ul>
            <li><strong>No Dedicated Tajik Models:</strong> Persian-focused models don't address Tajik's unique Cyrillic script and cultural context</li>
            <li><strong>Quality Assessment Problems:</strong> Most evaluations focus on automated metrics rather than actual text quality</li>
            <li><strong>Cultural Inappropriateness:</strong> Existing multilingual models often produce culturally irrelevant content</li>
        </ul>
        
        <h3>Our Solution: Quality-Focused Qwen3 Fine-Tuning</h3>
        
        <h4>Why Qwen3?</h4>
        <p>We selected Alibaba's Qwen3 model family for several strategic reasons:</p>
        <ul>
            <li><strong>Multilingual Foundation:</strong> Built-in support for multiple languages</li>
            <li><strong>Parameter Efficiency:</strong> 0.6B and 1.7B variants offer optimal performance-to-resource ratios</li>
            <li><strong>Fine-tuning Capability:</strong> Designed for easy adaptation to specific languages</li>
            <li><strong>Open Access:</strong> Available through platforms like Unsloth for research and development</li>
        </ul>
        
        <h4>Technical Implementation</h4>
        <p><strong>Training Infrastructure:</strong></p>
        <ul>
            <li><strong>Framework:</strong> Unsloth 2025.6.2 with 4-bit quantization</li>
            <li><strong>Dataset:</strong> 180 million tokens of high-quality data in Tajik, mainly curated governmental communications, classical Tajik literature including "Тоҷикон" (Бобоҷон Ғафуров), "Хуросон аст ин ҷо" (Муҳаммадҷон Шакурии Бухороӣ), and "ТОҶИРИ ИН БРИСТИҚЛОЛИ ХУРОСОНИ БУЗУРГ"</li>
            <li><strong>Hardware:</strong> NVIDIA RTX 4000 Ada Generation (19.7GB VRAM)</li>
            <li><strong>Memory Efficiency:</strong> Only 2-3GB VRAM required during inference</li>
        </ul>
        
        <p><strong>Optimization Strategies:</strong></p>
        <ul>
            <li>Parameter-efficient fine-tuning (LoRA) with only 0.38% trainable parameters</li>
            <li>BFloat16 mixed precision training</li>
            <li>Gradient checkpointing for memory efficiency</li>
            <li>AdamW 8-bit optimizer with weight decay 0.01</li>
        </ul>
        
        <h3>Revolutionary Evaluation Methodology</h3>
        
        <h4>Beyond Automated Success Rates</h4>
        <p>Traditional AI model evaluation relies heavily on automated metrics that can be misleading. We developed a comprehensive quality assessment framework that examines actual generated text quality.</p>
        
        <p><strong>Our Evaluation Dimensions:</strong></p>
        <ul>
            <li><strong>Linguistic Coherence:</strong> Natural flow in Tajik language</li>
            <li><strong>Contextual Appropriateness:</strong> Logical continuation of prompts</li>
            <li><strong>Cultural Accuracy:</strong> Proper use of Tajik cultural patterns</li>
            <li><strong>Length and Completeness:</strong> Thoroughness of responses</li>
        </ul>
        
        <h3>Remarkable Results: Quality Transformation</h3>
        
        <h4>Dramatic Quality Improvements</h4>
        <p>Our evaluation revealed stark differences between baseline and fine-tuned models that only become apparent through careful quality analysis.</p>
        
        <h4>Sample Comparisons: Same Prompt, Different Quality</h4>
        <p><strong>Prompt:</strong> "Соҳибкори ҷавон " (Young businessman), Temperature = 0.7</p>
        
        <p><strong>Baseline Qwen3-0.6B Response:</strong><br/>
        <em>""ҳам қаршиҳои амудиҳоҳо кӯн табақион ҷаммурудди борли. Ой, небашалоҳ ҳатиҳ""</em></p>

        <p><strong>Fine-tuned Qwen3-1.7B Response:</strong><br/>
        <em>"қадр мекунад? Мардуми Тоҷикистон дар ҳамин зодрӯз, ки шукрона мезанд ва имконистҳоро бештар ба"</em></p>
        
        <h3>Conclusion: A New Era for Tajik Language Technology</h3>
        <p>The successful completion of this project marks the beginning of a new era for Tajik language technology. By creating the first dedicated AI language models for Tajik processing, we have not only filled a critical gap in Central Asian language resources but also established a new standard for quality-focused language model development.</p>
    </>
);


// ================================================================================================
// DYNAMIC MODAL COMPONENT
// ================================================================================================

const ArticleModal = ({ article, isOpen, onClose }) => {
  if (!isOpen || !article) {
    return null;
  }

  // Dynamically render the content component passed in the article object
  const ArticleContentComponent = article.contentComponent;

  return (
    <div className="modal-overlay" onClick={onClose} style={{ background: 'rgba(0, 0, 0, 0.6)' }}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{
        background: 'linear-gradient(145deg, #ffffff, #f8fafc)',
        border: '1px solid rgba(34, 197, 94, 0.2)',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)'
      }}>
        <div className="modal-header" style={{
          background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.05), rgba(59, 130, 246, 0.03))',
          borderBottom: '1px solid rgba(34, 197, 94, 0.1)'
        }}>
          <h2 className="modal-title" style={{ color: '#1e293b' }}>{article.title}</h2>
          <button className="modal-close" onClick={onClose} style={{
            background: 'rgba(239, 68, 68, 0.1)',
            border: '1px solid rgba(239, 68, 68, 0.2)',
            color: '#ef4444'
          }}>×</button>
        </div>
        
        <div className="modal-body">
          <div className="article-meta">
            <span className="article-date" style={{ color: '#22c55e' }}>{article.date}</span>
            <span className="article-authors" style={{ color: '#64748b' }}>Authors: {article.author.name}</span>
          </div>
          
          <div className="article-content" style={{ color: '#374151' }}>
            {ArticleContentComponent}
          </div>
        </div>
      </div>
    </div>
  )
}


const SaidzodaLab = () => {
  const [selectedArticle, setSelectedArticle] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  })
  
  const { ref: articlesRef, inView: articlesInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  // List of all research articles
  const articles = [
    {
      id: 4,
      title: "A New Benchmark in Tajik AI: Our 8B Model Achieves Advanced Reasoning and Emergent Translation",
      excerpt: "At Saidzoda Engineering, our mission has been to build a truly intelligent, open-source AI for the Tajik language. Today, we announce the completion of our most ambitious training curriculum to date, achieving advanced reasoning and emergent translation capabilities.",
      category: "AI & Machine Learning",
      categoryIcon: "🚀",
      date: "July 21, 2025",
      readTime: 15,
      image: "/images/articles/article-4.jpg",
      tags: ["8B-Model", "Multi-Epoch", "Translation", "Reasoning", "Benchmark", "Open-Source"],
      author: {
        name: "Tohir Saidzoda, Khurshed Alizoda, Abubakr Abdullozoda, Nasim Rajabov, Bedil Karimov",
        role: "Chief Technology Officer",
        avatar: "/images/team/cto.jpg"
      },
      contentComponent: <FourthArticleContent />
    },
    {
      id: 3,
      title: "The Mind of a Machine Takes Shape: Our 8B Tajik AI Masters Step-by-Step Reasoning",
      excerpt: "In a sophisticated third stage of development, we have successfully taught our 8B Question-Answering model to \"think out loud,\" a crucial step towards creating a truly transparent and explainable Tajik AI.",
      category: "AI & Machine Learning",
      categoryIcon: "🤔",
      date: "June 28, 2025",
      readTime: 12,
      image: "/images/articles/article-3.jpg",
      tags: ["8B-Model", "Thinking-Mode", "XAI", "Reasoning", "Step-by-Step", "Transparency"],
      author: {
        name: "Tohir Saidzoda, Abubakr Abdullozoda, Nasim Rajabov, Khurshed A., Bedil K.",
        role: "Chief Technology Officer",
        avatar: "/images/team/cto.jpg"
      },
      contentComponent: <ThirdArticleContent />
    },
    {
      id: 2,
      title: "Mastering Nuance: Our New 4B Tajik AI Model",
      excerpt: "Following our initial success, we unveil a more powerful 4-billion-parameter model trained with an innovative 3-stage methodology, resulting in an AI that not only speaks Tajik but thinks in it.",
      category: "AI & Machine Learning",
      categoryIcon: "🧠",
      date: "June 23, 2025",
      readTime: 9,
      image: "/images/articles/artcle-2.jpg",
      tags: ["4B-Model", "3-Stage-Training", "Qwen3-4B", "AI-Discipline", "NLP"],
      author: {
        name: "Tohir Saidzoda, Abubakr Abdullozoda, Nasim Rajabov, Khurshed A., Bedil K.",
        role: "Chief Technology Officer",
        avatar: "/images/team/cto.jpg"
      },
      contentComponent: <SecondArticleContent />
    },
    {
      id: 1,
      title: "First Fine-Tuned Language Models for Tajik Processing",
      excerpt: "Historic breakthrough: Successfully developed the first dedicated AI language models for Tajik language, achieving 99-100% success rates through innovative fine-tuning of Qwen3 models with 180 million tokens of culturally authentic content.",
      category: "AI & Machine Learning",
      categoryIcon: "🤖",
      date: "June 15, 2025",
      readTime: 8,
      image: "/images/articles/artcle-1.jpg",
      tags: ["Qwen3", "FineTuning", "TajikAI", "NLP", "Research"],
      author: {
        name: "Tohir Saidzoda, Abubakr Abdullozoda, Nasim Rajabov, Khurshed A., Bedil K.",
        role: "Chief Technology Officer",
        avatar: "/images/team/cto.jpg"
      },
      contentComponent: <FirstArticleContent />
    }
  ]

  const handleReadMore = (article) => {
    setSelectedArticle(article)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedArticle(null)
  }

  return (
    <div className="saidzoda-lab-page">
      {/* Hero Section */}
      <section ref={heroRef} className={`lab-hero section ${heroInView ? 'fade-in' : ''}`} style={{ padding: '80px 0 60px', minHeight: '70vh' }}>
        <div className="hero-bg-matrix" style={{ opacity: 0.3 }}></div>
        <div className="floating-lab-particles" style={{ opacity: 0.4 }}>
          <div className="lab-particle">🧬</div>
          <div className="lab-particle">⚛️</div>
          <div className="lab-particle">🔬</div>
          <div className="lab-particle">💡</div>
          <div className="lab-particle">🚀</div>
          <div className="lab-particle">⚡</div>
        </div>
        
        <div className="container">
          <div className="hero-content text-center">
            <div className="hero-badge" style={{ 
              background: 'rgba(255, 255, 255, 0.15)', 
              border: '1px solid rgba(34, 197, 94, 0.3)',
              padding: '12px 24px',
              borderRadius: '50px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '24px',
              position: 'relative',
              zIndex: 10
            }}>
              <div className="badge-pulse" style={{ opacity: 0.3 }}></div>
              <span className="badge-icon" style={{ fontSize: '20px' }}>🔬</span>
              <span className="badge-text" style={{ color: '#22c55e', fontWeight: '600', fontSize: '14px' }}>Innovation Laboratory</span>
            </div>
            
            <h2 className="hero-title" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '16px' }}>
              <span className="title-line title-gradient">Saidzoda Lab</span>
            </h2>
            
            <p className="hero-description" style={{ 
              fontSize: 'clamp(0.9rem, 2vw, 1rem)', 
              color: '#94a3b8', 
              marginBottom: '24px',
              maxWidth: '500px',
              margin: '0 auto 24px'
            }}>
              Discover our latest breakthroughs in AI, machine learning, data engineering, and cutting-edge 
              technology solutions. From research papers to real-world applications, explore how Saidzoda 
              Engineering is shaping the future of technology in Central Asia.
            </p>
            
            <div className="hero-actions">
              <button className="hero-btn primary" style={{ 
                padding: '12px 24px', 
                fontSize: '14px',
                background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                boxShadow: '0 4px 12px rgba(34, 197, 94, 0.3)'
              }}>
                <span>Latest Research</span>
                <div className="btn-particle-trail"></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section ref={articlesRef} className={`articles-section section ${articlesInView ? 'fade-in' : ''}`} style={{ 
        padding: '40px 0',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%)'
      }}>
        <div className="articles-bg-neural" style={{ opacity: 0.1 }}></div>
        <div className="container">          
          <div className="articles-grid" style={{ maxWidth: '1100px', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
            {articles.map((article, index) => (
              <NewsCard 
                key={article.id} 
                article={article} 
                index={index}
                inView={articlesInView}
                onReadMore={handleReadMore}
              />
            ))}
          </div>
        </div>
      </section>
      
      <ContactCTA />
      
      <ArticleModal 
        article={selectedArticle}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  )
}

export default SaidzodaLab